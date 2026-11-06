import Link from "next/link";
import type { ReactNode } from "react";

export type NavigationKey = "inicio" | "empresa" | "soluciones" | "contacto";

const navigation = [
  { key: "inicio", label: "Inicio", href: "/" },
  { key: "empresa", label: "Empresa", href: "/empresa" },
  { key: "soluciones", label: "Soluciones", href: "/soluciones" },
] as const;

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand ${light ? "brand--light" : ""}`} href="/" aria-label="Hidroterra, ir al inicio">
      <img className="brand__logo" src="/hidroterra-brand.png" alt="Hidroterra" />
    </Link>
  );
}

function Navigation({ active, mobile = false }: { active: NavigationKey; mobile?: boolean }) {
  return (
    <nav className={mobile ? "mobile-nav" : "desktop-nav"} aria-label={mobile ? "Navegación móvil" : "Navegación principal"}>
      {navigation.map((item) => (
        <Link key={item.key} href={item.href} aria-current={active === item.key ? "page" : undefined}>{item.label}</Link>
      ))}
      <Link className="nav-contact" href="/contacto" aria-current={active === "contacto" ? "page" : undefined}>Cotizar proyecto <span>↗</span></Link>
    </nav>
  );
}

export function Header({ active }: { active: NavigationKey }) {
  return (
    <header className="site-header">
      <Brand />
      <Navigation active={active} />
      <details className="mobile-menu">
        <summary aria-label="Abrir menú"><span /><span /><span /></summary>
        <Navigation active={active} mobile />
      </details>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__top">
        <div><Brand light /><p>Ingeniería y soluciones hidráulicas pensadas para perdurar.</p></div>
        <div className="footer__links"><strong>Navegación</strong><Link href="/empresa">Empresa</Link><Link href="/soluciones">Soluciones</Link><Link href="/contacto">Contacto</Link></div>
        <div className="footer__contact"><strong>Contacto</strong><a href="tel:+56975194872">+56 9 7519 4872</a><a href="mailto:ventas@hidroterra.cl">ventas@hidroterra.cl</a><span>Américo Vespucio 2053, Of. 41, Renca</span></div>
      </div>
      <div className="footer__bottom"><small>© 2026 Hidroterra SpA. Todos los derechos reservados.</small><small>Ingeniería · Agua · Energía</small></div>
    </footer>
  );
}

export function PageShell({ active, children }: { active: NavigationKey; children: ReactNode }) {
  return <><Header active={active} /><main>{children}</main><Footer /></>;
}

export function PageHero({ eyebrow, title, accent, lead }: { eyebrow: string; title: string; accent?: string; lead: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero__content"><p className="eyebrow">{eyebrow}</p><h1>{title} {accent && <em>{accent}</em>}</h1><p>{lead}</p></div>
      <div className="page-hero__graphic" aria-hidden="true"><span /><span /><div className="page-hero__logo"><img src="/hidroterra-mark.png" alt="" /></div></div>
    </section>
  );
}

export function ContactBand({ title = "¿Tienes un desafío que debemos hacer fluir?" }: { title?: string }) {
  return (
    <section className="contact-band">
      <div><p className="eyebrow">Conversemos</p><h2>{title}</h2></div>
      <Link className="button button--light" href="/contacto">Cuéntanos tu proyecto <span>↗</span></Link>
    </section>
  );
}

export function ContactForm() {
  return (
    <form className="contact-form" action="/api/contacto" method="POST">
      <input className="contact-form__trap" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
      <div className="contact-form__grid">
        <label><span>Nombre y apellido *</span><input type="text" name="Nombre" autoComplete="name" placeholder="Ej. Camila González" required /></label>
        <label><span>Empresa</span><input type="text" name="Empresa" autoComplete="organization" placeholder="Nombre de la empresa" /></label>
        <label><span>Correo electrónico *</span><input type="email" name="email" autoComplete="email" placeholder="nombre@empresa.cl" required /></label>
        <label><span>Teléfono</span><input type="tel" name="Telefono" autoComplete="tel" placeholder="+56 9 1234 5678" /></label>
      </div>
      <label><span>¿En qué podemos ayudarte? *</span><select name="Tipo de solicitud" defaultValue="" required><option value="" disabled>Selecciona una opción</option><option>Bombas sumergibles Hidrosteel</option><option>Motores sumergibles</option><option>Cable sumergible Hidrocable</option><option>Tableros eléctricos</option><option>Sistema de bombeo solar</option><option>Bombas industriales</option><option>Drenaje y aguas servidas</option><option>Tubería flexible</option><option>Proyecto hidráulico integral</option><option>Otra consulta</option></select></label>
      <label><span>Cuéntanos sobre tu proyecto *</span><textarea name="Mensaje" rows={5} placeholder="Describe brevemente tu necesidad, ubicación y plazos estimados." required /></label>
      <label className="contact-form__consent"><input type="checkbox" name="Consentimiento" value="Aceptado" required /><span>Acepto que Hidroterra utilice estos datos para responder mi solicitud.</span></label>
      <button className="contact-form__submit" type="submit">Enviar solicitud <span aria-hidden="true">↗</span></button>
      <p className="contact-form__note">Los campos marcados con * son obligatorios.</p>
    </form>
  );
}
