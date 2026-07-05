#!/bin/sh
set -e
cat <<EOF > /usr/share/nginx/html/env-config.js
window.APP_CONFIG = {
  VITE_API_VENTAS_URL: "${VITE_API_VENTAS_URL}",
  VITE_API_DESPACHOS_URL: "${VITE_API_DESPACHOS_URL}"
};
EOF
exec "$@"
