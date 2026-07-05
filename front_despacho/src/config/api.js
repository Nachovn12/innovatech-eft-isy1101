// Config centralizada de URLs de los backends.
// En producción y en local, las URLs se inyectan en tiempo de ejecución
// mediante el archivo env-config.js, generado por entrypoint.sh al iniciar
// el contenedor Nginx, leyendo variables de entorno del contenedor.
// Esto permite que la misma imagen Docker sirva para cualquier entorno
// sin necesidad de reconstruir el build cuando cambian las URLs.

const runtimeConfig = (typeof window !== "undefined" && window.APP_CONFIG) || {};

export const API_VENTAS_URL = runtimeConfig.VITE_API_VENTAS_URL || import.meta.env.VITE_API_VENTAS_URL;
export const API_DESPACHOS_URL = runtimeConfig.VITE_API_DESPACHOS_URL || import.meta.env.VITE_API_DESPACHOS_URL;

if (!API_VENTAS_URL || !API_DESPACHOS_URL) {
  console.warn(
    "[config/api] Falta VITE_API_VENTAS_URL o VITE_API_DESPACHOS_URL. " +
    "Revisa las variables de entorno del contenedor o el .env.local."
  );
}
