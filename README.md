# Innovatech Chile

Proyecto para la EFT del ramo ISY1101 (Introducción a Herramientas DevOps), DUOC UC Concepción. Automatiza el ciclo de integración y despliegue de una plataforma de ventas y despachos.

El sistema tiene tres partes: dos APIs REST en Spring Boot (ventas y despachos, cada una con su propia base de datos MySQL) y un frontend en React que las consume. Todo corre en contenedores y se levanta local con Docker Compose.

## Servicios

- **backend-ventas** (puerto 8080): API de órdenes de compra. Base de datos `ventas_db`.
- **backend-despachos** (puerto 8081): API de gestión de despachos e intentos de entrega. Base de datos `despachos_db`.
- **frontend** (puerto 5173): SPA en React + Vite, servida con Nginx, que consume las dos APIs.
- **db**: MySQL 8.0 con ambas bases inicializadas desde `db/init.sql`.

## Estructura del repositorio

```
innovatech-chile-ET/
├── back-Ventas_SpringBoot/
├── back-Despachos_SpringBoot/
├── front_despacho/
├── db/
├── docker-compose.yml
├── .env.example
└── README.md
```

## Levantar el proyecto en local

Necesitas Docker y Docker Compose instalados.

```bash
git clone <url-del-repositorio>
cd innovatech-chile-ET
cp .env.example .env
docker-compose up --build
```

El `.env` no va en el repositorio por seguridad — cópialo desde `.env.example` y completa los valores.

Verificar que los 4 contenedores quedaron arriba:

```bash
docker-compose ps
```

## URLs de acceso

- Frontend: http://localhost:5173
- API ventas: http://localhost:8080/api/v1/ventas
- API despachos: http://localhost:8081/api/v1/despachos

## Build

Los backends usan Dockerfile multietapa: compilan con `eclipse-temurin:17-jdk-alpine` vía Maven Wrapper y corren en `eclipse-temurin:17-jre-alpine` bajo un usuario no root. El frontend compila con `node:20-alpine` y se sirve con `nginx:1.27-alpine`.

## Integrantes

- Ignacio Valeria
- Benjamín Palma
