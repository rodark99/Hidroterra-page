import type { MetadataRoute } from "next";
import { productFamilies } from "./catalog-data";
import { siteUrl } from "./seo";

/** Mapa del sitio para buscadores: /sitemap.xml */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/soluciones", "/empresa", "/contacto"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const families = productFamilies.map((family) => ({
    url: `${siteUrl}/soluciones/${family.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  return [...pages, ...families];
}
