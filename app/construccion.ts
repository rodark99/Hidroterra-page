/**
 * Modo "Página en construcción".
 * - true: los visitantes ven solo la página "En construcción" con los datos de contacto.
 * - false: la página completa queda abierta para todos.
 * Para revisar la página completa mientras está en construcción, abre una vez:
 *   https://<tu-dirección>/?acceso=<CLAVE_ACCESO>
 * El navegador queda autorizado por 30 días. Las versiones de prueba de Vercel no se bloquean.
 */
export const SITIO_EN_CONSTRUCCION = true;
export const CLAVE_ACCESO = "ver-hidroterra-7k2p";
export const COOKIE_ACCESO = "hidroterra_acceso";
