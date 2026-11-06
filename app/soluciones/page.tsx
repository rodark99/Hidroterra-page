import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, PageShell } from "../components";
import { productFamilies } from "../catalog-data";

export const metadata: Metadata = {
  title: "Productos y soluciones",
  description: "Catálogo de bombas sumergibles de pozo y desagüe, motores sumergibles, cable sumergible y tableros eléctricos de Hidroterra.",
};

export default function SolucionesPage() {
  return (
    <PageShell active="soluciones">
      <section className="catalog-hero">
        <div className="catalog-hero__content">
          <p className="eyebrow">Productos y soluciones</p>
          <h1>Equipamiento confiable para <em>cada desafío hidráulico.</em></h1>
          <p>Explora nuestras familias de productos. En cada sección encontrarás los equipos disponibles, sus aplicaciones y rangos técnicos principales.</p>
          <a className="button button--primary" href="#catalogo">Ver catálogo <span>↓</span></a>
        </div>
        <div className="catalog-hero__media" aria-label="Aplicaciones de agua y minería">
          <img src="/productos/catalogo-agua.png" alt="Agua en movimiento, aplicación de los equipos Hidroterra" />
          <img src="/productos/catalogo-mineria.png" alt="Faena minera, aplicación de soluciones Hidroterra" />
        </div>
      </section>

      <section className="catalog-section section" id="catalogo">
        <div className="catalog-section__head">
          <div>
            <p className="eyebrow">Catálogo Hidroterra</p>
            <h2>Encuentra la solución que necesita tu operación.</h2>
          </div>
          <p>Selecciona una categoría para revisar sus modelos, especificaciones y aplicaciones recomendadas.</p>
        </div>

        <div className="catalog-grid">
          {productFamilies.map((family) => (
            <article className="catalog-card" key={family.slug}>
              <Link className="catalog-card__image" href={`/soluciones/${family.slug}`} aria-label={`Conocer más sobre ${family.title}`}>
                <span>{family.number}</span>
                <img src={family.coverImage} alt={family.title} />
              </Link>
              <div className="catalog-card__body">
                <p>{family.application}</p>
                <h2>{family.shortTitle}</h2>
                <p>{family.description}</p>
                <Link className="catalog-card__link" href={`/soluciones/${family.slug}`}>Conocer más <span>→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="catalog-support section">
        <div><p className="eyebrow">Asesoría técnica</p><h2>No necesitas elegir el equipo solo.</h2></div>
        <p>Nuestro equipo puede ayudarte a definir caudal, altura, potencia, materiales y configuración según las condiciones reales de tu proyecto.</p>
        <Link className="button button--primary" href="/contacto">Solicitar recomendación <span>↗</span></Link>
      </section>
      <ContactBand title="¿Necesitas una cotización o una selección técnica?" />
    </PageShell>
  );
}
