"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function PozoDemo() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    let observer: ResizeObserver | undefined;
    const fit = () => {
      const doc = el.contentDocument;
      if (!doc?.body) return;
      const update = () => setHeight(doc.documentElement.scrollHeight);
      update();
      observer?.disconnect();
      observer = new ResizeObserver(update);
      observer.observe(doc.body);
    };
    el.addEventListener("load", fit);
    if (el.contentDocument?.readyState === "complete") fit();
    return () => {
      el.removeEventListener("load", fit);
      observer?.disconnect();
    };
  }, []);

  return (
    <section className="pozo-demo" aria-labelledby="pozo-demo-title">
      <div className="pozo-demo__text">
        <p className="eyebrow">Pozo de pruebas</p>
        <h2 id="pozo-demo-title">Así trabaja un equipo sumergible por dentro</h2>
        <p>
          Recorre el interior de una bomba de pozo en funcionamiento: el motor
          sumergible gira, los rodetes impulsan el agua hacia la superficie y el
          variador controla la frecuencia, el caudal y la presión.
        </p>
        <ul className="pozo-demo__parts">
          <li><Link href="/soluciones/motores-sumergibles">Motor sumergible</Link></li>
          <li><Link href="/soluciones/bombas-sumergibles">Bomba de rodetes</Link></li>
          <li><Link href="/soluciones/tableros-electricos">Tablero y variador</Link></li>
          <li><Link href="/soluciones/cables-sumergibles">Cable sumergible</Link></li>
        </ul>
      </div>
      <div className="pozo-demo__stage">
        <iframe
          ref={frame}
          src="/pozo/index.html"
          title="Animación de un pozo de pruebas con bomba sumergible"
          loading="lazy"
          scrolling="no"
          style={height ? { height } : undefined}
        />
      </div>
    </section>
  );
}
