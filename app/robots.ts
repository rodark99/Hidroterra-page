import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";
import { SITIO_EN_CONSTRUCCION } from "./construccion";

/** Permite que los buscadores lean el sitio: /robots.txt */
export default function robots(): MetadataRoute.Robots {
  return {
    // Mientras la página está en construcción, los buscadores no la leen.
    rules: SITIO_EN_CONSTRUCCION ? [{ userAgent: "*", disallow: "/" }] : [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
