import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBand, PageShell } from "../../components";
import { getProductFamily, productFamilies } from "../../catalog-data";

type FamilyPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productFamilies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: FamilyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const family = getProductFamily(slug);
  if (!family) return { title: "Producto no encontrado" };
  return { title: family.shortTitle, description: family.description };
}

export default async function ProductFamilyPage({ params }: FamilyPageProps) {
  const { slug } = await params;
  const family = getProductFamily(slug);
  if (!family) notFound();

  return (
    <PageShell active="soluciones">
      <section className="family-hero">
        <div className="family-hero__copy">
          <Link href="/soluciones" className="family-back">← Volver al catálogo</Link>
          <p className="eyebrow">Familia {family.number}</p>
          <h1>{family.title}</h1>
          <p>{family.description}</p>
          <div className="family-hero__application"><span>Aplicaciones</span><strong>{family.application}</strong></div>
        </div>
        <div className="family-hero__image"><img src={family.coverImage} alt={family.title} /></div>
      </section>

      <section className="models-section section">
        <div className="models-section__head">
          <div><p className="eyebrow">Equipos disponibles</p><h2>Modelos y especificaciones</h2></div>
          <p>Rangos referenciales del catálogo Hidroterra. La selección final debe validarse según el punto de operación y las condiciones del fluido.</p>
        </div>

        <div className="model-list">
          {family.models.map((model, index) => (
            <article className="model-card" key={model.name}>
              <div className="model-card__media">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <img src={model.image} alt={model.name} />
              </div>
              <div className="model-card__content">
                <h2>{model.name}</h2>
                <p>{model.description}</p>
                {model.highlights && <ul>{model.highlights.map((item) => <li key={item}>{item}</li>)}</ul>}
                <Link className="catalog-card__link" href={`/contacto?producto=${encodeURIComponent(model.name)}`}>Cotizar este equipo <span>↗</span></Link>
              </div>
              <dl className="spec-list">
                {model.specs.map((spec) => <div key={`${model.name}-${spec.label}`}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}
              </dl>
            </article>
          ))}
        </div>
      </section>

      <nav className="family-nav section" aria-label="Otras familias de productos">
        <p className="eyebrow">Seguir explorando</p>
        <div>{productFamilies.filter((item) => item.slug !== family.slug).map((item) => <Link href={`/soluciones/${item.slug}`} key={item.slug}><span>{item.number}</span>{item.shortTitle}<b>→</b></Link>)}</div>
      </nav>
      <ContactBand title={`Conversemos sobre ${family.shortTitle.toLowerCase()}.`} />
    </PageShell>
  );
}
