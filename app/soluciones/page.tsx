import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, PageShell } from "../components";
import { productFamilies } from "../catalog-data";

export const metadata: Metadata = {
  title: "Productos y soluciones",
  description: "Catálogo de bombas sumergibles de pozo y desagüe, motores sumergibles, cable sumergible y tableros eléctricos de Hidroterra.",
};

const supportPoints = ["Caudal y altura de trabajo", "Potencia y voltaje", "Materiales según el fluido", "Configuración de control"];

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
        <div className="section-head">
          <div>
            <p className="eyebrow">Catálogo Hidroterra</p>
            <h2>Encuentra la solución que necesita tu operación.</h2>
          </div>
          <p>Selecciona una categoría para revisar sus modelos, especificaciones y aplicaciones recomendadas.</p>
        </div>

        <div className="family-grid">
          {productFamilies.map((family) => (
            <Link className="family-card" href={`/soluciones/${family.slug}`} key={family.slug}>
              <div className="family-card__media">
                <img src={family.coverImage} alt={family.title} />
              </div>
              <div className="family-card__body">
                <span className="soft-card__number">{family.number}</span>
                <h2>{family.shortTitle}</h2>
                <p>{family.description}</p>
                <ul aria-label="Equipos disponibles">
                  {(family.categories?.length ? family.categories.map((category) => category.name.replace("Bombas sumergibles de ", "Bombas de ")) : family.models.map((model) => model.name)).map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
                <span className="family-card__link">Ver productos <b>→</b></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="catalog-support section">
        <div className="catalog-support__box">
          <div>
            <p className="eyebrow">Asesoría técnica</p>
            <h2>No necesitas elegir el equipo solo.</h2>
            <p>Nuestro equipo te ayuda a definir la configuración según las condiciones reales de tu proyecto.</p>
            <Link className="button button--primary" href="/contacto">Solicitar recomendación <span>↗</span></Link>
          </div>
          <ul>
            {supportPoints.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
      </section>
      <ContactBand title="¿Necesitas una cotización o una selección técnica?" />
    </PageShell>
  );
}
