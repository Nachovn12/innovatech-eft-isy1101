// Config centralizada de URLs de los backends.
// Los valores vienen de variables de entorno de Vite (VITE_*), definidas en:
// - .env.local          -> para desarrollo local (docker-compose)
// - variables inyectadas en el build del pipeline de GitHub Actions -> para producción en AWS
//
// Importante: Vite solo expone al código del navegador las variables que
// empiezan con VITE_, y las reemplaza en tiempo de BUILD (no de runtime).
// Si cambian las URLs en AWS (ej. tras un redeploy que cambia la IP pública
// de un servicio Fargate), hay que actualizar el valor en GitHub Secrets/Vars
// y volver a correr el pipeline para que el nuevo build tome el valor nuevo.

export const API_VENTAS_URL = import.meta.env.VITE_API_VENTAS_URL;
export const API_DESPACHOS_URL = import.meta.env.VITE_API_DESPACHOS_URL;

if (!API_VENTAS_URL || !API_DESPACHOS_URL) {
  // Esto avisa altiro en consola si falta configurar el .env, en vez de
  // fallar en silencio con peticiones a "undefined/api/v1/...".
  console.warn(
    "[config/api] Falta VITE_API_VENTAS_URL o VITE_API_DESPACHOS_URL. " +
    "Revisa el archivo .env.local o las variables del pipeline."
  );
}
