import Link from "next/link";
import { ContactBand, PageShell } from "./components";
import { productFamilies } from "./catalog-data";

// Los 4 strips de la portada, en este orden.
const homeSlugs = [
  "bombas-pozo",
  "motores-sumergibles",
  "cables-sumergibles",
  "tableros-electricos",
];

const catalogTitles: Record<string, string> = {
  "bombas-pozo": "Bombas sumergibles",
  "motores-sumergibles": "Motores sumergibles",
  "cables-sumergibles": "Cable sumergible",
  "tableros-electricos": "Tableros eléctricos",
};

const homeFamilies = homeSlugs
  .map((slug) => productFamilies.find((family) => family.slug === slug))
  .filter((family): family is NonNullable<typeof family> => Boolean(family));

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

        <div className="product-strips" aria-label="Familias de productos">
          {homeFamilies.map((family, index) => (
            <Link
              className={`product-strip product-strip--${index + 1}`}
              href={`/soluciones/${family.slug}`}
              key={family.slug}
              aria-label={`Conocer más sobre ${catalogTitles[family.slug] ?? family.shortTitle}`}
            >
              <img src={family.coverImage} alt="" aria-hidden="true" />
              <span className="product-strip__veil" aria-hidden="true" />
              <span className="product-strip__number">{String(index + 1).padStart(2, "0")}</span>
              <span className="product-strip__content">
                <strong>{catalogTitles[family.slug] ?? family.shortTitle}</strong>
                <span className="product-strip__description">
                  {family.description}
                </span>
              </span>
              <span className="product-strip__plus" aria-hidden="true">+</span>
            </Link>
          ))}
        </div>

        <div className="home-catalog__footer">
          <p>
            ¿Quieres comparar todas las familias o revisar el catálogo completo?
          </p>
          <Link className="arrow-link" href="/soluciones">
            Ver todos los productos <span>↗</span>
          </Link>
        </div>
      </section>
      <section className="home-brands" aria-labelledby="home-brands-title">
        <div className="home-brands__intro">
          <p className="eyebrow" id="home-brands-title">Marcas propias</p>
          <h2>Equipos con respaldo Hidroterra.</h2>
        </div>
        <div className="home-brands__grid">
          <Link className="brand-card" href="/soluciones/bombas-pozo">
            <span className="brand-card__name">HIDRO<b>STEEL</b></span>
            <span className="brand-card__line">Bombas sumergibles</span>
            <p>Bombas de pozo en acero inoxidable para agua potable, riego, industria y minería.</p>
            <span className="brand-card__link">Ver bombas →</span>
          </Link>
          <Link className="brand-card" href="/soluciones/cables-sumergibles">
            <span className="brand-card__name">HIDRO<b>CABLE</b></span>
            <span className="brand-card__line">Cable sumergible</span>
            <p>Cables planos y redondos para alimentar bombas y motores sumergibles.</p>
            <span className="brand-card__link">Ver cables →</span>
          </Link>
        </div>
      </section>
      <ContactBand title="¿Ya sabes qué equipo necesita tu proyecto?" />
    </PageShell>
  );
}
