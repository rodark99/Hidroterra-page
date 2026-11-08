import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, PageHero, PageShell } from "../components";
import { productFamilies } from "../catalog-data";

export const metadata: Metadata = { title: "Empresa", description: "Conoce la historia, el compromiso y los valores de Hidroterra." };

const principles = [
  { title: "Confianza", text: "Recomendamos lo que la operación necesita, con información clara desde la primera conversación." },
  { title: "Experiencia en terreno", text: "Conocemos las condiciones reales de pozos, faenas e instalaciones industriales." },
  { title: "Compromiso técnico", text: "Respaldamos cada selección con datos de caudal, altura, potencia y materiales." },
  { title: "Eficiencia hídrica y energética", text: "Buscamos equipos que consuman lo justo y operen de forma continua." },
];

const steps = [
  { title: "Entendemos la operación", text: "Revisamos caudal, altura, tipo de fluido, diámetro del pozo y condiciones de trabajo. Si faltan datos, te ayudamos a definirlos." },
  { title: "Seleccionamos el equipo", text: "Integramos bomba, motor, cable, tubería y tablero eléctrico para que el sistema funcione como un conjunto." },
  { title: "Acompañamos en el tiempo", text: "Damos soporte técnico para mantener la continuidad operacional y resolver cambios en la demanda." },
];

export default function EmpresaPage() {
  return (
    <PageShell active="empresa">
      <PageHero eyebrow="Empresa" title="Ingeniería cercana," accent="decisiones precisas." lead="Conectamos equipos confiables con la realidad técnica de cada operación." />

      <section className="company-summary section" aria-labelledby="company-summary-title">
        <div className="company-summary__copy">
          <p className="eyebrow">Quiénes somos</p>
          <h2 id="company-summary-title">Soluciones hidráulicas pensadas desde el terreno.</h2>
          <p>
            Hidroterra acompaña a empresas y proyectos que necesitan mover,
            controlar y aprovechar el agua con seguridad. Combinamos suministro
            de equipos, criterio técnico y seguimiento para construir relaciones
            de largo plazo.
          </p>
          <Link className="arrow-link" href="/soluciones">
            Conocer nuestros productos <span>↗</span>
          </Link>
        </div>
        <div className="principle-grid" aria-label="Principios de Hidroterra">
          {principles.map((principle, index) => (
            <article className="soft-card principle-card" key={principle.title}>
              <span className="soft-card__number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="offer section" aria-labelledby="offer-title">
        <div className="section-head">
          <div>
            <p className="eyebrow">Qué ofrecemos</p>
            <h2 id="offer-title">Todo el sistema de bombeo, en un solo lugar.</h2>
          </div>
          <p>Cinco líneas de equipos que trabajan juntas desde el fondo del pozo hasta el tablero de control.</p>
        </div>
        <div className="offer-grid">
          {productFamilies.map((family) => (
            <Link className="offer-card" href={`/soluciones/${family.slug}`} key={family.slug}>
              <div className="offer-card__media"><img src={family.coverImage} alt="" /></div>
              <span className="soft-card__number">{family.number}</span>
              <h3>{family.shortTitle}</h3>
              <span className="offer-card__link">Ver productos <b>→</b></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="process section" aria-labelledby="process-title">
        <div className="section-head">
          <div>
            <p className="eyebrow">Cómo trabajamos</p>
            <h2 id="process-title">Una bomba no se elige solo por catálogo.</h2>
          </div>
          <p>Partimos por entender la operación y terminamos con una solución que puede sostenerse en el tiempo.</p>
        </div>
        <div className="process-grid">
          {steps.map((step, index) => (
            <article className="soft-card process-card" key={step.title}>
              <span className="process-card__step">Paso {index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
          <article className="process-cta">
            <div>
              <span className="process-card__step">El punto de partida</span>
              <h3>¿Qué necesitas mover y hasta dónde?</h3>
              <p>Cuéntanos el caudal, la altura, el fluido y las condiciones de trabajo.</p>
              <Link className="button button--primary" href="/contacto">
                Hablar con un especialista <span>↗</span>
              </Link>
            </div>
            <img src="/productos/bombas-verticales.png" alt="" />
          </article>
        </div>
      </section>

      <ContactBand title="Construyamos una solución a la medida de tu proyecto." />
    </PageShell>
  );
}
