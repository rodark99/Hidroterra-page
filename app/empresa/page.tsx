import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, PageHero, PageShell } from "../components";

export const metadata: Metadata = { title: "Empresa", description: "Conoce la historia, el compromiso y los valores de Hidroterra." };

const principles = ["Confianza", "Experiencia en terreno", "Compromiso técnico", "Eficiencia hídrica y energética"];

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
        <div className="company-summary__principles" aria-label="Principios de Hidroterra">
          {principles.map((principle, index) => (
            <div key={principle}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{principle}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="buying-support buying-support--company section">
        <div className="buying-support__head">
          <div>
            <p className="eyebrow">Cómo trabajamos</p>
            <h2>Una bomba no se elige solo por catálogo.</h2>
          </div>
          <div className="buying-support__intro">
            <p>Partimos por entender la operación y terminamos con una solución que puede sostenerse en el tiempo.</p>
          </div>
        </div>

        <div className="buying-support__brief">
          <div className="buying-support__question">
            <span className="buying-support__label">El punto de partida</span>
            <h3>¿Qué necesitas mover y hasta dónde?</h3>
            <p>Cuéntanos el caudal, la altura, el fluido y las condiciones de trabajo. Si faltan datos, te ayudamos a definirlos.</p>
            <Link className="button button--light" href="/contacto">
              Hablar con un especialista <span>↗</span>
            </Link>
          </div>

          <div className="buying-support__equipment" aria-hidden="true">
            <img src="/productos/bombas-verticales.png" alt="" />
            <span>Selección según aplicación</span>
          </div>

          <div className="buying-support__answer">
            <span className="buying-support__label">La respuesta Hidroterra</span>
            <p>Integramos bomba, motor, control y conducción, con soporte para mantener la continuidad operacional.</p>
            <Link className="arrow-link" href="/soluciones">
              Revisar productos <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <ContactBand title="Construyamos una solución a la medida de tu proyecto." />
    </PageShell>
  );
}
