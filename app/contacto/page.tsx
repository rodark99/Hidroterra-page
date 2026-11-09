import type { Metadata } from "next";
import { ContactForm, PageHero, PageShell } from "../components";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Hidroterra para cotizar equipos y conversar sobre tu proyecto hidráulico.",
};

type ContactIconName = "location" | "phone" | "mail" | "instagram";

function ContactIcon({ name }: { name: ContactIconName }) {
  if (name === "location") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s6-5.4 6-12a6 6 0 1 0-12 0c0 6.6 6 12 6 12Z" />
        <circle cx="12" cy="9" r="2.2" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.2 3.5 5.6 4.7c-.8.4-1.2 1.3-1 2.2 1.5 6.3 6.3 11.1 12.6 12.6.9.2 1.8-.2 2.2-1l1.2-2.6-4.5-2-1.2 1.8a14.5 14.5 0 0 1-6.6-6.6l1.8-1.2-1.9-4.4Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.7" r=".8" className="contact-icon__fill" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

type ContactoPageProps = {
  searchParams: Promise<{
    enviado?: string;
    error?: string;
  }>;
};

// Mensajes según el motivo del error (el código entre paréntesis sirve para diagnosticar).
const errorMessages: Record<string, string> = {
  datos: "Revisa los datos: el nombre debe tener al menos 3 letras, el correo debe ser válido y el mensaje al menos 10 caracteres.",
  configuracion: "No pudimos enviar tu solicitud en este momento. Escríbenos a ventas@hidroterra.cl. (Código: configuración)",
  clave: "No pudimos enviar tu solicitud en este momento. Escríbenos a ventas@hidroterra.cl. (Código: clave)",
  "clave-publica": "No pudimos enviar tu solicitud en este momento. Escríbenos a ventas@hidroterra.cl. (Código: clave pública)",
  tabla: "No pudimos enviar tu solicitud en este momento. Escríbenos a ventas@hidroterra.cl. (Código: tabla)",
  "base-datos": "No pudimos enviar tu solicitud en este momento. Escríbenos a ventas@hidroterra.cl. (Código: base de datos)",
  conexion: "No pudimos enviar tu solicitud en este momento. Escríbenos a ventas@hidroterra.cl. (Código: conexión)",
};

export default async function ContactoPage({ searchParams }: ContactoPageProps) {
  const params = await searchParams;

  return (
    <PageShell active="contacto">
      <PageHero
        eyebrow="Contacto"
        title="Conversemos sobre"
        accent="tu proyecto."
        lead="Cotiza equipos o cuéntanos tu necesidad. Nuestro equipo revisará tu solicitud para entregarte una respuesta directa."
      />

      <section className="contact-overview section" aria-labelledby="contacto-directo">
        <div className="contact-overview__heading">
          <p className="eyebrow">Contacto directo</p>
          <h2 id="contacto-directo">Encuéntranos o habla con nuestro equipo.</h2>
        </div>

        <div className="contact-methods">
          <a
            className="contact-method"
            href="https://www.google.com/maps/search/?api=1&query=Americo+Vespucio+2053+Oficina+41+Renca"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-method__icon"><ContactIcon name="location" /></span>
            <span className="contact-method__label">Dirección</span>
            <strong>Américo Vespucio 2053, Of. 41, Renca</strong>
            <small>Ver ubicación ↗</small>
          </a>

          <a className="contact-method" href="tel:+56975194872">
            <span className="contact-method__icon"><ContactIcon name="phone" /></span>
            <span className="contact-method__label">Teléfono</span>
            <strong>+56 9 7519 4872</strong>
            <small>Llamar ahora</small>
          </a>

          <a className="contact-method" href="mailto:ventas@hidroterra.cl">
            <span className="contact-method__icon"><ContactIcon name="mail" /></span>
            <span className="contact-method__label">Correo</span>
            <strong>ventas@hidroterra.cl</strong>
            <small>Escribir un correo</small>
          </a>
        </div>

        <p className="contact-hours">
          <span>Horario de atención</span>
          Lunes a viernes · 09:00–18:00
        </p>
      </section>

      <section className="contact-workspace section" aria-labelledby="solicitar-informacion">
        <div className="contact-workspace__form">
          <p className="eyebrow">Solicita información</p>
          <h2 id="solicitar-informacion">Cuéntanos qué necesitas.</h2>
          {params.enviado === "true" && (
            <p className="form-alert form-alert--success" role="status">
              Recibimos tu solicitud correctamente. Nuestro equipo se pondrá en
              contacto contigo.
            </p>
          )}
          {params.error && (
            <p className="form-alert form-alert--error" role="alert">
              {errorMessages[params.error] ?? errorMessages.conexion}
            </p>
          )}
          <ContactForm />
        </div>

        <aside className="contact-workspace__aside">
          <img src="/hidroterra-brand.png" alt="Hidroterra" />
          <p>
            Seleccionamos equipos y soluciones de bombeo según las condiciones
            reales de cada proyecto.
          </p>
        </aside>
      </section>
    </PageShell>
  );
}
