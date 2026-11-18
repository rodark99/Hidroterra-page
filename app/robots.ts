import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

/** Permite que los buscadores lean el sitio: /robots.txt */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
