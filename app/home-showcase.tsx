"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { modelHref, type ProductFamily, type ProductModel } from "./catalog-data";

/** Sección que aparece suavemente al bajar, con una fila de productos que se desliza a la derecha. */
export function ShowcaseSection({ family, index }: { family: ProductFamily; index: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [state, setState] = useState<"static" | "hidden" | "visible">("static");

  useEffect(() => {
    const element = sectionRef.current;
    if (!element || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const alreadyInView = element.getBoundingClientRect().top < window.innerHeight * 0.85;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(alreadyInView ? "visible" : "hidden");
    if (alreadyInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const cards = buildCards(family);

  return (
    <section
      ref={sectionRef}
      className={`showcase showcase--${state}`}
      aria-labelledby={`showcase-${family.slug}`}
    >
      <div className="showcase__head">
        <span className="showcase__number">{String(index + 1).padStart(2, "0")}</span>
        <h2 id={`showcase-${family.slug}`}>
          {family.shortTitle}. <span>{family.description}</span>
        </h2>
        <Link className="arrow-link" href={`/soluciones/${family.slug}`}>
          Ver la sección completa <span>→</span>
        </Link>
      </div>
      <Rail label={`Productos de ${family.shortTitle}`}>{cards}</Rail>
    </section>
  );
}

function buildCards(family: ProductFamily): ReactNode[] {
  let position = 0;
  const next = () => position++;

  if (family.categories?.length) {
    return family.categories.flatMap((category) => [
      <IntroCard
        key={`cat-${category.name}`}
        order={next()}
        eyebrow="Categoría"
        title={category.name}
        text={category.description}
        image={category.image}
      />,
      ...family.models
        .filter((model) => model.category === category.name)
        .map((model) => <ModelCard key={model.id} order={next()} family={family} model={model} />),
    ]);
  }

  return [
    <IntroCard
      key="intro"
      order={next()}
      eyebrow="Aplicaciones"
      title={family.shortTitle}
      text={family.application}
      image={family.coverImage}
    />,
    ...family.models.map((model) => <ModelCard key={model.id} order={next()} family={family} model={model} />),
  ];
}

function IntroCard({ order, eyebrow, title, text, image }: { order: number; eyebrow: string; title: string; text: string; image: string }) {
  return (
    <article className="rail-card rail-card--intro" style={{ "--i": order } as React.CSSProperties}>
      <div className="rail-card__copy">
        <span className="rail-card__eyebrow">{eyebrow}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <img src={image} alt={title} />
    </article>
  );
}

function ModelCard({ order, family, model }: { order: number; family: ProductFamily; model: ProductModel }) {
  return (
    <Link className="rail-card rail-card--model" href={modelHref(family, model)} style={{ "--i": order } as React.CSSProperties}>
      <div className="rail-card__media">
        <img src={model.image} alt={model.name} />
      </div>
      <div className="rail-card__body">
        {model.category && <span className="rail-card__eyebrow">{model.category.replace("Bombas sumergibles de ", "")}</span>}
        <h3>{model.name}</h3>
        <p>{model.description}</p>
        <dl>
          {model.specs.slice(0, 2).map((spec) => (
            <div key={spec.label}>
              <dt>{spec.label}</dt>
              <dd>{spec.value}</dd>
            </div>
          ))}
        </dl>
        <span className="rail-card__link">Ver ficha técnica <b>→</b></span>
      </div>
    </Link>
  );
}

function Rail({ label, children }: { label: string; children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      setEdges({ start: track.scrollLeft <= 4, end: track.scrollLeft >= max - 4 });
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const move = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * Math.max(track.clientWidth * 0.75, 300), behavior: "smooth" });
  };

  return (
    <div className="rail">
      <div className="rail__track" ref={trackRef} role="region" aria-label={label} tabIndex={0}>
        {children}
      </div>
      <div className="rail__controls">
        <button type="button" onClick={() => move(-1)} disabled={edges.start} aria-label="Ver productos anteriores">‹</button>
        <button type="button" onClick={() => move(1)} disabled={edges.end} aria-label="Ver más productos">›</button>
      </div>
    </div>
  );
}
