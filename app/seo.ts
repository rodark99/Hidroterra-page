import type { Metadata } from "next";

/**
 * Títulos y descripciones para buscadores (Google, Bing).
 * - title: idealmente menos de 60 caracteres (se agrega " | Hidroterra" al final).
 * - description: idealmente entre 120 y 160 caracteres.
 * Para cambiar lo que aparece en Google, edita los textos de este archivo.
 */

/** Dirección pública del sitio. Vercel la entrega sola; con el dominio propio será https://hidroterra.cl */
export const siteUrl = process.env.SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

type PageSeo = { title: string; description: string; keywords: string[] };

export const pageSeo: Record<"inicio" | "empresa" | "soluciones" | "contacto", PageSeo> = {
  inicio: {
    title: "Hidroterra | Bombas sumergibles, motores y cable en Chile",
    description:
      "Bombas sumergibles de pozo y desagüe, motores, cable sumergible, tableros y accesorios para pozos. Asesoría técnica y cotizaciones en Santiago, Chile.",
    keywords: ["bombas sumergibles", "bombas de pozo", "motores sumergibles", "cable sumergible", "bombas Chile", "equipos de bombeo", "Hidroterra"],
  },
  empresa: {
    title: "Empresa",
    description:
      "Hidroterra asesora a empresas, agricultores y APR en sistemas de bombeo completos: bomba, motor, cable, tablero y cañerías. Conoce cómo trabajamos.",
    keywords: ["Hidroterra", "empresa de bombas", "asesoría en bombeo", "sistemas de bombeo"],
  },
  soluciones: {
    title: "Productos: bombas, motores, cable y accesorios",
    description:
      "Catálogo de bombas sumergibles y centrífugas, motores sumergibles, cable sumergible, tableros, tubería flexible, cañerías, válvulas y conexiones.",
    keywords: ["catálogo de bombas", "bombas sumergibles", "motores sumergibles", "cable sumergible", "tableros eléctricos", "válvulas", "cañerías"],
  },
  contacto: {
    title: "Contacto y cotizaciones",
    description:
      "Cotiza bombas, motores sumergibles y accesorios con Hidroterra. Américo Vespucio 2053, Of. 41, Renca. +56 9 7519 4872 · contacto@hidroterra.cl",
    keywords: ["cotizar bombas", "cotización bomba sumergible", "Hidroterra contacto", "bombas Renca", "bombas Santiago"],
  },
};

/** Una entrada por sección de productos (la clave es el slug de catalog-data.ts). */
export const familySeo: Record<string, PageSeo> = {
  "bombas-sumergibles": {
    title: "Bombas de pozo, desagüe y centrífugas",
    description:
      "Bombas sumergibles de pozo de 3 a 12 pulgadas, bombas de desagüe para minería y construcción, y bombas centrífugas. Especificaciones y cotización en Chile.",
    keywords: ["bombas sumergibles", "bomba de pozo", "bomba de pozo profundo", "bomba 3 pulgadas", "bomba 4 pulgadas", "bomba de desagüe", "bomba de drenaje minería", "bomba centrífuga"],
  },
  "motores-sumergibles": {
    title: "Motores sumergibles de 4\" a 12\"",
    description:
      "Motores sumergibles encapsulados y rebobinables de 4 a 12 pulgadas, desde 0,37 kW hasta 540 HP. Para pozos profundos, minería y agua potable.",
    keywords: ["motores sumergibles", "motor sumergible 4 pulgadas", "motor sumergible 6 pulgadas", "motor rebobinable", "motor encapsulado"],
  },
  "cables-sumergibles": {
    title: "Cable sumergible plano y redondo",
    description:
      "Cable sumergible plano de goma de 1,5 a 120 mm², apto para agua potable y pozos de hasta 500 m, y cable redondo H07RN-F. Descarga el catálogo y cotiza.",
    keywords: ["cable sumergible", "cable plano sumergible", "cable para bomba sumergible", "cable H07RN-F", "cable de goma"],
  },
  "tableros-electricos": {
    title: "Tableros eléctricos y variadores de frecuencia",
    description:
      "Tableros eléctricos para bombas sumergibles: variadores de frecuencia, partidores suaves y partida estrella-triángulo según la potencia y aplicación.",
    keywords: ["tablero eléctrico bomba", "variador de frecuencia", "partidor suave", "partida estrella triángulo", "tablero de control"],
  },
  "tuberia-flexible": {
    title: "Tubería flexible para pozos",
    description:
      "Tubería flexible para pozos con acoples de acero inoxidable: sin corrosión, aprobación NSF y tracción hasta 20 toneladas. Instalación más rápida y económica.",
    keywords: ["tubería flexible para pozos", "manguera para pozo", "columna flexible", "tubería de impulsión flexible"],
  },
  canerias: {
    title: "Cañerías galvanizadas, inox y de acero negro",
    description:
      "Cañerías galvanizadas, de acero inoxidable y de acero negro con hilo NPT o BSP para columnas de impulsión, redes de agua e instalaciones industriales.",
    keywords: ["cañería galvanizada", "cañería acero inoxidable", "cañería acero negro", "hilo NPT", "hilo BSP"],
  },
  valvulas: {
    title: "Válvulas de bola, compuerta y retención",
    description:
      "Válvulas manuales de bola y compuerta, y válvulas de retención (check) para controlar, aislar y proteger sistemas de bombeo y redes de agua.",
    keywords: ["válvula de retención", "válvula check", "válvula de bola", "válvula de compuerta"],
  },
  conexiones: {
    title: "Coplas, thredolet y conexiones para cañerías",
    description:
      "Coplas roscadas, thredolets y conexiones para unir y derivar cañerías en redes de agua, pozos e instalaciones industriales.",
    keywords: ["coplas", "thredolet", "conexiones para cañerías", "fittings"],
  },
};

/** Arma los metadatos de una página (título, descripción, vista previa al compartir). */
export function buildMetadata(seo: PageSeo, path: string, image = "/hidroterra-brand.png", absoluteTitle = false): Metadata {
  return {
    title: absoluteTitle ? { absolute: seo.title } : seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_CL",
      siteName: "Hidroterra",
      url: path,
      title: absoluteTitle ? seo.title : `${seo.title} | Hidroterra`,
      description: seo.description,
      images: [{ url: image }],
    },
    twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: [image] },
  };
}

/** Datos de la empresa en el formato que leen los buscadores (ficha de negocio). */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Hidroterra",
  description: pageSeo.inicio.description,
  url: siteUrl,
  logo: `${siteUrl}/hidroterra-logo.png`,
  image: `${siteUrl}/hidroterra-brand.png`,
  telephone: "+56975194872",
  email: "contacto@hidroterra.cl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Américo Vespucio 2053, Of. 41",
    addressLocality: "Renca",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
  ],
  areaServed: "CL",
};
