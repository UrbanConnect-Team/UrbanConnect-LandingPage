# UrbanConnect

UrbanConnect es un prototipo web estático para la gestión de comunidades residenciales. Incluye inicio de sesión, panel administrativo y módulos para comunicados, incidencias, servicios, encuestas, reservas, pagos, documentos, accesos y configuración.

## Tecnologías

- HTML5 semántico.
- CSS3 con variables, Grid, Flexbox y media queries.
- JavaScript sin frameworks.
- `localStorage` para persistencia local de las funciones implementadas.
- Gherkin para los escenarios de aceptación.

No requiere instalación, dependencias ni proceso de compilación.

## Ejecución local

1. Descarga o clona el repositorio.
2. Abre `index.html` en un navegador moderno.
3. Inicia sesión con las credenciales de demostración:

```text
Usuario: admin
Contraseña: admin123
```

Después del acceso, el sistema dirige al usuario a `dashboard.html`.

> El usuario administrador se crea cuando la clave `usuarios` todavía no existe en `localStorage`. Para repetir una prueba desde cero, utiliza un perfil limpio del navegador o elimina los datos locales del sitio.

## Módulos

| Página | Propósito | Interactividad actual |
| --- | --- | --- |
| `index.html` | Inicio de sesión | Valida credenciales y conserva el usuario activo. |
| `registro.html` | Solicitud de registro | Formulario visual; pendiente de persistencia. |
| `dashboard.html` | Resumen administrativo | Indicadores y accesos a los módulos. |
| `comunicados.html` | Comunicados de la comunidad | Búsqueda, filtros y formulario modal visual. |
| `reportes.html` | Gestión de incidencias | Registro, asignación, evidencias, estados y orden por urgencia. |
| `servicios.html` | Solicitudes de servicio | Búsqueda, filtros y formulario modal visual. |
| `encuestas.html` | Encuestas comunitarias | Búsqueda, filtros y formulario modal visual. |
| `reservas.html` | Reservas de espacios | Búsqueda, filtros y formulario modal visual. |
| `pagos.html` | Cuotas, morosos, gastos y vouchers | Pago simulado, recibos, recordatorios, comprobantes y revisión de vouchers. |
| `documentos.html` | Documentos de la comunidad | Búsqueda, filtros y formulario modal visual. |
| `usuarios.html` | Accesos y operaciones | Paquetes, stock, QR de visitas, personal doméstico y mudanzas. |
| `configuracion.html` | Preferencias de la comunidad | Controles visuales; pendiente de persistencia. |

Los formularios de comunicados, servicios, encuestas, reservas y documentos todavía no crean registros. Reservas, encuestas y servicios controlan sus filtros y modales desde `js/reservas.js`, `js/encuestas.js` y `js/servicios.js`; comunicados y documentos conservan esas interacciones mediante `js/filters.js`.

Pagos, reservas, encuestas, servicios y documentos cargan una hoja CSS propia con sus componentes, paneles y reglas responsive. Sus estilos de módulo están desacoplados: ninguna de las hojas de reservas, encuestas, servicios o documentos importa `css/pagos.css`, por lo que los cambios visuales de una página no alteran las demás.

## Funcionalidades core documentadas

El repositorio contiene 15 User Stories core numeradas:

- Reportes: `HU01`, `HU02`, `HU03`, `HU04` y `HU07`.
- Pagos: `HU09`, `HU10`, `HU11`, `HU12` y `HU14`.
- Accesos y operaciones: `HU21`, `HU31`, `HU32`, `HU33` y `HU34`.

Además, `features/login.feature` contiene cinco escenarios de aceptación sin etiqueta HU. El proyecto cuenta actualmente con 20 escenarios Gherkin en total. Para alcanzar una meta de 30 User Stories core todavía deben implementarse y documentarse 15 historias numeradas adicionales.

## Persistencia local

| Clave | Información |
| --- | --- |
| `usuarios` | Credenciales disponibles para el login. |
| `usuarioActivo` | Usuario que inició sesión. |
| `uc_reportes_tickets` | Tickets y seguimiento de incidencias. |
| `uc_pagos_cuotas` | Estado de las cuotas. |
| `uc_pagos_vouchers` | Revisión de vouchers. |
| `uc_paquetes` | Paquetes recibidos. |
| `uc_stock` | Niveles de insumos del gimnasio. |
| `uc_qr_visitas` | Credenciales QR simuladas. |
| `uc_personal` | Personal doméstico autorizado. |
| `uc_mudanzas` | Mudanzas y órdenes de protección del ascensor. |

Los datos se guardan únicamente en el navegador y no se sincronizan con un servidor.

## Estructura principal

```text
UrbanConnect-LandingPage/
├── index.html
├── registro.html
├── dashboard.html
├── comunicados.html
├── reportes.html
├── servicios.html
├── encuestas.html
├── reservas.html
├── pagos.html
├── documentos.html
├── usuarios.html
├── configuracion.html
├── css/
│   ├── global.css
│   ├── layout.css
│   └── estilos de cada módulo
├── js/
│   ├── login.js
│   ├── filters.js
│   ├── reportes.js
│   ├── pagos.js
│   ├── reservas.js
│   ├── encuestas.js
│   ├── servicios.js
│   └── usuarios.js
├── img/
├── features/
│   ├── login.feature
│   ├── reportes.feature
│   ├── pagos.feature
│   └── accesos.feature
└── docs/
    └── chapter-v-product-implementation.md
```

## Responsive y accesibilidad

Las páginas utilizan media queries para adaptar columnas, navegación, formularios y tablas en desktop, tablet y móvil. Antes de una publicación debe realizarse una comprobación visual en los navegadores objetivo.

Las imágenes incluyen texto alternativo. Las áreas dinámicas principales de reportes, pagos y accesos utilizan `aria-live`; todavía deben completarse nombres accesibles en algunos filtros y botones de los módulos visuales.

## Pruebas de aceptación

Los escenarios se encuentran en:

- [`features/login.feature`](features/login.feature)
- [`features/reportes.feature`](features/reportes.feature)
- [`features/pagos.feature`](features/pagos.feature)
- [`features/accesos.feature`](features/accesos.feature)

Son especificaciones Gherkin para ejecución manual. El repositorio no incluye todavía un runner automatizado.

## Despliegue

El proyecto puede publicarse directamente con GitHub Pages desde la rama `main` y la carpeta raíz `/`. No necesita variables de entorno ni secretos.

La configuración de desarrollo, control de versiones, despliegue y trazabilidad funcional se describe en [`docs/chapter-v-product-implementation.md`](docs/chapter-v-product-implementation.md).
