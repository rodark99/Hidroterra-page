import Link from "next/link";
import { ContactBand, PageShell } from "./components";
import { productFamilies } from "./catalog-data";
import { ShowcaseSection } from "./home-showcase";

export default function Home() {
  return (
    <PageShell active="inicio">
      <section className="home-catalog" aria-labelledby="home-catalog-title">
        <div className="home-catalog__intro">
          <h1 id="home-catalog-title" className="eyebrow">
            Ingeniería que mueve tus necesidades
          </h1>
          <p>
            Explora nuestros equipos por categoría y encuentra modelos,
            aplicaciones y especificaciones para tu proyecto.
          </p>
        </div>
        <nav className="home-jump" aria-label="Ir a una categoría">
          {productFamilies.map((family) => (
            <a href={`#showcase-${family.slug}`} key={family.slug}>
              {family.shortTitle}
            </a>
          ))}
        </nav>
      </section>

      <div className="showcases">
        {productFamilies.map((family, index) => (
          <ShowcaseSection family={family} index={index} key={family.slug} />
        ))}
      </div>

      <div className="home-catalog__footer showcases__footer">
        <p>¿Quieres comparar todas las familias o revisar el catálogo completo?</p>
        <Link className="arrow-link" href="/soluciones">
          Ver todos los productos <span>↗</span>
        </Link>
      </div>
      <ContactBand title="¿Ya sabes qué equipo necesita tu proyecto?" />
    </PageShell>
  );
}
