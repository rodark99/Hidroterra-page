import { NextResponse, type NextRequest } from "next/server";
import { CLAVE_ACCESO, COOKIE_ACCESO, SITIO_EN_CONSTRUCCION } from "./app/construccion";

/** Muestra "En construcción" a los visitantes mientras SITIO_EN_CONSTRUCCION sea true. */
export function proxy(request: NextRequest) {
  if (!SITIO_EN_CONSTRUCCION) return NextResponse.next();
  // Las versiones de prueba (ramas distintas de main) siempre se ven completas.
  if (process.env.VERCEL_ENV === "preview") return NextResponse.next();

  const { pathname, searchParams } = request.nextUrl;

  // Link privado: ?acceso=<clave> deja autorizado este navegador por 30 días.
  if (searchParams.get("acceso") === CLAVE_ACCESO) {
    const destino = request.nextUrl.clone();
    destino.searchParams.delete("acceso");
    const respuesta = NextResponse.redirect(destino);
    respuesta.cookies.set(COOKIE_ACCESO, "1", { maxAge: 60 * 60 * 24 * 30, httpOnly: true, sameSite: "lax", secure: true, path: "/" });
    return respuesta;
  }
  if (request.cookies.get(COOKIE_ACCESO)?.value === "1") {
    const respuesta = NextResponse.next();
    respuesta.headers.set("X-Robots-Tag", "noindex, nofollow");
    return respuesta;
  }

  if (pathname === "/en-construccion") return NextResponse.next();
  const respuesta = NextResponse.rewrite(new URL("/en-construccion", request.url));
  respuesta.headers.set("X-Robots-Tag", "noindex, nofollow");
  return respuesta;
}

export const config = {
  // No toca imágenes, catálogos PDF, archivos internos ni el formulario (/api).
  matcher: ["/((?!_next/|api/|productos/|catalogos/|favicon|.*\\.[a-zA-Z0-9]+$).*)"],
};
