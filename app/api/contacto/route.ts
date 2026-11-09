import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type SolicitudGuardada = { id: string };

function requiredEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Falta la variable ${name}`);
  return value;
}

function field(formData: FormData, name: string, maxLength: number): string {
  return String(formData.get(name) ?? "").trim().slice(0, maxLength);
}

function supabaseHeaders(secretKey: string): Record<string, string> {
  const headers: Record<string, string> = {
    apikey: secretKey,
    "Content-Type": "application/json",
  };

  if (!secretKey.startsWith("sb_secret_")) {
    headers.Authorization = `Bearer ${secretKey}`;
  }

  return headers;
}

type Correo = { to: string; replyTo: string; subject: string; text: string };
type Enviador = { from: string; aceptaCualquierDestino: boolean; enviar: (correo: Correo) => Promise<string | null> };

/**
 * Elige cómo enviar correos según las variables de Vercel:
 * - SMTP_HOST, SMTP_USER y SMTP_PASS → el servidor de correo propio (por ejemplo, Bluehost).
 * - RESEND_API_KEY → Resend.
 * Devuelve null si no hay nada configurado. enviar() devuelve el error o null si salió bien.
 */
function crearEnviador(): Enviador | null {
  const smtpHost = process.env.SMTP_HOST?.trim();
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS;
  const from = process.env.CONTACT_FROM_EMAIL?.trim();

  if (smtpHost && smtpUser && smtpPass) {
    const port = Number(process.env.SMTP_PORT?.trim() || 465);
    const transporte = nodemailer.createTransport({
      host: smtpHost,
      port,
      secure: port === 465,
      auth: { user: smtpUser, pass: smtpPass },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
    });
    return {
      // El servidor exige que el remitente sea la misma cuenta.
      from: from && from.includes(smtpUser) ? from : `Hidroterra Web <${smtpUser}>`,
      aceptaCualquierDestino: true,
      enviar: async ({ to, replyTo, subject, text }) => {
        try {
          await transporte.sendMail({ from: from && from.includes(smtpUser) ? from : `Hidroterra Web <${smtpUser}>`, to, replyTo, subject, text });
          return null;
        } catch (error) {
          return error instanceof Error ? error.message : String(error);
        }
      },
    };
  }

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  if (resendApiKey && from) {
    return {
      from,
      // Con el remitente de prueba de Resend solo se puede escribir al correo de la cuenta.
      aceptaCualquierDestino: !/@resend\.dev>?$/i.test(from),
      enviar: async ({ to, replyTo, subject, text }) => {
        const respuesta = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${resendApiKey}`, "Content-Type": "application/json" },
          body: JSON.stringify({ from, to: [to], reply_to: replyTo, subject, text }),
        });
        return respuesta.ok ? null : await respuesta.text();
      },
    };
  }

  return null;
}

export async function POST(request: Request) {
  const successUrl = new URL("/contacto?enviado=true", request.url);
  const errorUrl = (motivo: string) => new URL(`/contacto?error=${motivo}`, request.url);

  try {
    const formData = await request.formData();

    if (field(formData, "_honey", 100)) {
      return NextResponse.redirect(successUrl, 303);
    }

    const nombre = field(formData, "Nombre", 120);
    const empresa = field(formData, "Empresa", 120);
    const correo = field(formData, "email", 180).toLowerCase();
    const telefono = field(formData, "Telefono", 30);
    const tipoAyuda = field(formData, "Tipo de solicitud", 100);
    const descripcion = field(formData, "Mensaje", 3000);
    const consentimiento =
      field(formData, "Consentimiento", 20) === "Aceptado";

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

    if (
      nombre.length < 3 ||
      !correoValido ||
      !tipoAyuda ||
      descripcion.length < 10 ||
      !consentimiento
    ) {
      return NextResponse.redirect(errorUrl("datos"), 303);
    }

    let supabaseUrl: string;
    let supabaseSecretKey: string;
    try {
      // Acepta la URL aunque venga con "/" o "/rest/v1" al final.
      supabaseUrl = requiredEnv("SUPABASE_URL").replace(/\/+$/, "").replace(/\/rest\/v1$/, "");
      supabaseSecretKey = requiredEnv("SUPABASE_SECRET_KEY");
      new URL(supabaseUrl);
    } catch (error) {
      console.error("Configuración incompleta:", error);
      return NextResponse.redirect(errorUrl("configuracion"), 303);
    }

    const databaseResponse = await fetch(
      `${supabaseUrl}/rest/v1/solicitudes_contacto`,
      {
        method: "POST",
        headers: {
          ...supabaseHeaders(supabaseSecretKey),
          Prefer: "return=representation",
        },
        body: JSON.stringify({
          nombre_apellido: nombre,
          empresa: empresa || null,
          correo,
          telefono: telefono || null,
          tipo_ayuda: tipoAyuda,
          descripcion,
          consentimiento: true,
        }),
      },
    );

    if (!databaseResponse.ok) {
      const detalle = await databaseResponse.text();
      console.error("No se pudo guardar la solicitud:", databaseResponse.status, detalle);
      let motivo = "base-datos";
      if (databaseResponse.status === 401 || /invalid api key|jwt/i.test(detalle)) motivo = "clave";
      else if (/42501|row-level security|permission denied/i.test(detalle)) motivo = "clave-publica";
      else if (/42P01|PGRST205|does not exist|could not find the table/i.test(detalle)) motivo = "tabla";
      return NextResponse.redirect(errorUrl(motivo), 303);
    }

    const registros = (await databaseResponse.json()) as SolicitudGuardada[];
    const solicitudId = registros[0]?.id;

    if (!solicitudId) {
      throw new Error("Supabase no devolvió el ID de la solicitud");
    }

    const destinationEmail = process.env.CONTACT_TO_EMAIL?.trim();
    const enviador = crearEnviador();

    if (enviador && destinationEmail) {
      const errorEmpresa = await enviador.enviar({
        to: destinationEmail,
        replyTo: correo,
        subject: `Nueva solicitud: ${tipoAyuda} — ${nombre}`,
        text: [
          "Nueva solicitud desde el sitio web de Hidroterra",
          "",
          `Nombre: ${nombre}`,
          `Empresa: ${empresa || "No informada"}`,
          `Correo: ${correo}`,
          `Teléfono: ${telefono || "No informado"}`,
          `Tipo de solicitud: ${tipoAyuda}`,
          "",
          "Descripción:",
          descripcion,
          "",
          `ID de solicitud: ${solicitudId}`,
        ].join("\n"),
      });

      const errorCliente = enviador.aceptaCualquierDestino
        ? await enviador.enviar({
            to: correo,
            replyTo: destinationEmail,
            subject: "Recibimos tu solicitud — Hidroterra",
        text: [
          `Hola ${nombre},`,
          "",
          "Recibimos correctamente tu solicitud en Hidroterra.",
          "Nuestro equipo revisará la información y se comunicará contigo.",
          "",
          `Tipo de solicitud: ${tipoAyuda}`,
          `Número de solicitud: ${solicitudId}`,
          "",
          "Hidroterra SpA",
        ].join("\n"),
          })
        : null;

      const errores = [errorEmpresa, errorCliente].filter((e): e is string => Boolean(e));
      if (errores.length) console.error("Error enviando correos:", errores);

      const updateUrl =
        `${supabaseUrl}/rest/v1/solicitudes_contacto` +
        `?id=eq.${encodeURIComponent(solicitudId)}`;

      await fetch(updateUrl, {
        method: "PATCH",
        headers: {
          ...supabaseHeaders(supabaseSecretKey),
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          correo_notificado: errores.length === 0,
          correo_notificado_en:
            errores.length === 0 ? new Date().toISOString() : null,
          error_notificacion: errores.length
            ? errores.join(" | ").slice(0, 1000)
            : null,
        }),
      });
    }

    return NextResponse.redirect(successUrl, 303);
  } catch (error) {
    console.error("Error procesando el formulario:", error);
    return NextResponse.redirect(errorUrl("conexion"), 303);
  }
}
