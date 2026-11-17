"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { modelHref, productFamilies } from "./catalog-data";

/** Páginas del sitio con sus subsecciones (anclas dentro de cada página). */
const pages = [
  {
    label: "Empresa",
    href: "/empresa",
    sections: [
      { label: "Quiénes somos", href: "/empresa#quienes-somos" },
      { label: "Qué ofrecemos", href: "/empresa#que-ofrecemos" },
      { label: "Cómo trabajamos", href: "/empresa#como-trabajamos" },
    ],
  },
  {
    label: "Soluciones",
    href: "/soluciones",
    sections: [
      { label: "Catálogo", href: "/soluciones#catalogo" },
      { label: "Asesoría técnica", href: "/soluciones#asesoria" },
    ],
  },
  {
    label: "Contacto",
    href: "/contacto",
    sections: [
      { label: "Datos de contacto", href: "/contacto#contacto-directo" },
      { label: "Formulario de cotización", href: "/contacto#solicitar-informacion" },
    ],
  },
];

/** Índice desplegable a la izquierda con productos, empresa, soluciones y contacto. */
export function SiteIndex() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("index-open");
    panelRef.current?.querySelector<HTMLElement>("a, button, summary")?.focus();
    const button = buttonRef.current;
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("index-open");
      button?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);
  const currentFamily = pathname.startsWith("/soluciones/") ? pathname.split("/")[2] : null;

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="index-toggle"
        aria-expanded={open}
        aria-controls="site-index"
        onClick={() => setOpen(true)}
      >
        <span className="index-toggle__icon" aria-hidden="true"><span /><span /><span /></span>
        <span className="index-toggle__label">Índice</span>
      </button>

      <div className={`index-overlay ${open ? "is-open" : ""}`} onClick={close} aria-hidden="true" />

      <aside
        id="site-index"
        ref={panelRef}
        className={`site-index ${open ? "is-open" : ""}`}
        aria-label="Índice del sitio"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="site-index__head">
          <strong>Índice</strong>
          <button type="button" className="site-index__close" onClick={close} aria-label="Cerrar índice">×</button>
        </div>

        <nav className="site-index__body">
          <Link className={`site-index__page ${pathname === "/" ? "is-current" : ""}`} href="/" onClick={close}>Inicio</Link>

          <details className="site-index__group" open>
            <summary>Productos</summary>
            <ul>
              {productFamilies.map((family) => (
                <li key={family.slug}>
                  <details className="site-index__family" open={currentFamily === family.slug}>
                    <summary>
                      <span className="site-index__num">{family.number}</span>
                      {family.shortTitle}
                    </summary>
                    <ul>
                      <li>
                        <Link className="site-index__all" href={`/soluciones/${family.slug}`} onClick={close}>Ver toda la sección</Link>
                      </li>
                      {(family.categories?.length ? family.categories : [undefined]).map((category) => (
                        <li key={category?.name ?? "modelos"}>
                          {category && <span className="site-index__category">{category.name.replace("Bombas sumergibles de ", "Bombas de ")}</span>}
                          <ul>
                            {family.models
                              .filter((model) => !category || model.category === category.name)
                              .map((model) => (
                                <li key={model.id}>
                                  <Link href={modelHref(family, model)} onClick={close}>{model.name}</Link>
                                </li>
                              ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>
          </details>

          {pages.map((page) => (
            <details className="site-index__group" key={page.href} open={pathname === page.href}>
              <summary>{page.label}</summary>
              <ul>
                {page.sections.map((section) => (
                  <li key={section.href}>
                    <Link href={section.href} onClick={close}>{section.label}</Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </nav>

        <div className="site-index__foot">
          <a href="tel:+56975194872">+56 9 7519 4872</a>
          <a href="mailto:contacto@hidroterra.cl">contacto@hidroterra.cl</a>
        </div>
      </aside>
    </>
  );
}
