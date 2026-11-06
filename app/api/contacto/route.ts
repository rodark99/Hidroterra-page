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

async function sendEmail(
  apiKey: string,
  message: Record<string, unknown>,
): Promise<Response> {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}

export async function POST(request: Request) {
  const successUrl = new URL("/contacto?enviado=true", request.url);
  const errorUrl = new URL("/contacto?error=true", request.url);

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
      return NextResponse.redirect(errorUrl, 303);
    }

    const supabaseUrl = requiredEnv("SUPABASE_URL").replace(/\/$/, "");
    const supabaseSecretKey = requiredEnv("SUPABASE_SECRET_KEY");

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
      console.error(
        "No se pudo guardar la solicitud:",
        await databaseResponse.text(),
      );
      return NextResponse.redirect(errorUrl, 303);
    }

    const registros = (await databaseResponse.json()) as SolicitudGuardada[];
    const solicitudId = registros[0]?.id;

    if (!solicitudId) {
      throw new Error("Supabase no devolvió el ID de la solicitud");
    }

    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    const destinationEmail = process.env.CONTACT_TO_EMAIL?.trim();
    const senderEmail = process.env.CONTACT_FROM_EMAIL?.trim();

    if (resendApiKey && destinationEmail && senderEmail) {
      const emailEmpresa = await sendEmail(resendApiKey, {
        from: senderEmail,
        to: [destinationEmail],
        reply_to: correo,
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

      const emailCliente = await sendEmail(resendApiKey, {
        from: senderEmail,
        to: [correo],
        reply_to: destinationEmail,
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
      });

      const errores: string[] = [];
      if (!emailEmpresa.ok) errores.push(await emailEmpresa.text());
      if (!emailCliente.ok) errores.push(await emailCliente.text());

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
    return NextResponse.redirect(errorUrl, 303);
  }
}
