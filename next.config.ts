import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Direcciones antiguas que ya no existen: se envían a la sección nueva.
  async redirects() {
    return [
      { source: "/soluciones/bombas-pozo", destination: "/soluciones/bombas-sumergibles", permanent: true },
      { source: "/soluciones/drenaje", destination: "/soluciones/bombas-sumergibles", permanent: true },
      { source: "/soluciones/bombeo-solar", destination: "/soluciones", permanent: true },
      { source: "/soluciones/bombas-industriales", destination: "/soluciones", permanent: true },
      { source: "/soluciones/control-conduccion", destination: "/soluciones", permanent: true },
    ];
  },
};

export default nextConfig;
