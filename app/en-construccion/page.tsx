import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Hidroterra | Página en construcción" },
  description: "Estamos preparando la nueva página de Hidroterra. Contáctanos por teléfono o correo.",
  robots: { index: false, follow: false },
};

export default function EnConstruccion() {
  return (
    <main className="construccion">
      <div className="construccion__box">
        <img className="construccion__logo" src="/hidroterra-logo.png" alt="Hidroterra" />
        <p className="eyebrow">Página en construcción</p>
        <h1>Estamos preparando nuestra nueva página.</h1>
        <p className="construccion__lead">
          Muy pronto podrás revisar aquí nuestras bombas, motores, cable sumergible y accesorios.
          Mientras tanto, escríbenos o llámanos y te ayudamos con tu cotización.
        </p>
        <div className="construccion__datos">
          <a href="tel:+56975194872"><span>Teléfono</span><strong>+56 9 7519 4872</strong></a>
          <a href="mailto:contacto@hidroterra.cl"><span>Correo</span><strong>contacto@hidroterra.cl</strong></a>
          <div><span>Dirección</span><strong>Américo Vespucio 2053, Of. 41, Renca</strong></div>
          <div><span>Horario</span><strong>Lunes a viernes, 09:00 a 18:00</strong></div>
        </div>
      </div>
    </main>
  );
}
