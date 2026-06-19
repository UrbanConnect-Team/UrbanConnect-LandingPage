# Capítulo V: Product Implementation

UrbanConnect se implementa como una aplicación web estática construida con HTML5, CSS3 y JavaScript. El punto de entrada `index.html` presenta el inicio de sesión y conecta con el panel de administración en `dashboard.html` y sus módulos relacionados.

## 5.1 Software Configuration Management

La gestión de configuración de software define las herramientas, convenciones y procesos utilizados para mantener el producto reproducible y controlar sus cambios. UrbanConnect no requiere compilación ni instalación de dependencias: todos sus recursos se almacenan en el repositorio y el punto de entrada es `index.html`.

Los elementos bajo control de configuración son:

- Archivos HTML de la portada y módulos del prototipo.
- Hojas de estilo dentro de `css/`.
- Scripts básicos dentro de `js/`.
- Imágenes locales dentro de `img/`.
- Documentación técnica dentro de `docs/`.
- Pruebas de aceptación en formato Gherkin dentro de `features/`.

## 5.1.1 Software Development Environment Configuration

### Entorno de desarrollo

| Elemento | Configuración |
| --- | --- |
| Sistema operativo | Windows, macOS o Linux |
| Editor recomendado | Visual Studio Code |
| Navegadores objetivo | Chrome, Edge y Firefox en versiones actuales |
| Lenguajes | HTML5, CSS3 y JavaScript |
| Control de versiones | Git |
| Repositorio remoto | GitHub |
| Despliegue | GitHub Pages |

### Ejecución

El proyecto no utiliza React, Vue, Angular, Bootstrap, Tailwind ni un gestor de paquetes. Para ejecutarlo se abre `index.html` directamente en el navegador. Las rutas a CSS, JavaScript e imágenes son relativas para que funcionen tanto localmente como en GitHub Pages.

Las credenciales de demostración son `admin` y `admin123`. Después de validarlas, `js/login.js` guarda el usuario activo en `localStorage` y dirige a `dashboard.html`. El usuario inicial se crea únicamente cuando todavía no existe la clave `usuarios`.

### Configuración responsive

El diseño se desarrolla con enfoque adaptable mediante CSS Grid, Flexbox y media queries:

- Desktop: distribución amplia y navegación horizontal.
- Tablet: reducción de columnas y espacios.
- Móvil: contenido en una columna y menú desplegable.
- Móvil compacto: botones a ancho completo y controles reorganizados.

## 5.1.2 Source Code Management

### GitHub como control de versiones

Git registra el historial local del proyecto y GitHub aloja el repositorio remoto, facilita la colaboración y permite publicar el producto con GitHub Pages. El repositorio remoto del proyecto es:

```text
https://github.com/SoporteJBM/UrbanConnect-LandingPage.git
```

Cada cambio debe revisarse antes de agregarse al historial. Los archivos generados por el sistema operativo o el editor no deben formar parte de los commits.

### Flujo GitFlow

UrbanConnect adopta una versión simplificada de GitFlow:

| Rama | Propósito |
| --- | --- |
| `main` | Código estable y listo para producción. |
| `develop` | Integración de funcionalidades terminadas. |
| `feature/*` | Desarrollo de una funcionalidad específica. |
| `release/*` | Preparación y estabilización de una versión. |
| `hotfix/*` | Correcciones urgentes sobre producción. |

Ejemplo de desarrollo de una funcionalidad:

```bash
git switch develop
git pull origin develop
git switch -c feature/responsive-landing-page
git add .
git commit -m "feat: implement responsive landing page"
git push -u origin feature/responsive-landing-page
```

Después de la revisión, la rama `feature/*` se integra en `develop`. Una rama `release/*` se utiliza para preparar la publicación y finalmente se integra en `main` y `develop`.

### Semantic Versioning

Las versiones siguen el formato `MAJOR.MINOR.PATCH`:

- `v1.0.0`: primera versión estable de la interfaz web.
- `v1.1.0`: nueva funcionalidad compatible con la versión anterior.
- `v1.0.1`: corrección compatible sin nuevas funcionalidades.

La versión `MAJOR` aumenta cuando existen cambios incompatibles, `MINOR` cuando se agregan funcionalidades compatibles y `PATCH` cuando se corrigen errores.

## 5.1.3 Source Code Style Guide & Conventions

### HTML

- Utilizar elementos semánticos como `header`, `nav`, `main`, `section`, `article` y `footer`.
- Mantener un único `h1` y una jerarquía ordenada de encabezados.
- Incluir textos alternativos en imágenes informativas.
- Utilizar atributos ARIA solo cuando el elemento nativo no comunica todo el estado.
- Mantener rutas relativas para recursos internos.

### CSS

- Escribir nombres de clases en inglés y `kebab-case`, por ejemplo `.hero-section`.
- Declarar colores, tamaños y sombras reutilizables como variables en `:root`.
- Organizar estilos desde reglas generales hacia componentes y media queries.
- Evitar estilos en línea y selectores excesivamente específicos.
- Diseñar desde tamaños flexibles y verificar desktop, tablet y móvil.

### JavaScript

- Usar JavaScript solo para interacciones necesarias.
- Mantener funciones pequeñas y nombres descriptivos.
- Usar `addEventListener` para gestionar eventos.
- Comprobar que un elemento exista antes de utilizarlo.
- No introducir dependencias para comportamientos simples.

### Conventional Commits

Los mensajes de commit siguen el formato `tipo: descripción`:

- `feat: add mobile navigation`
- `fix: preserve dashboard routes`
- `docs: document GitHub Pages deployment`
- `style: improve landing page spacing`

Los tipos principales son:

| Tipo | Uso |
| --- | --- |
| `feat` | Nueva funcionalidad. |
| `fix` | Corrección de un defecto. |
| `docs` | Cambios únicamente en documentación. |
| `style` | Formato o estilos sin alterar la lógica. |

## 5.1.4 Software Deployment Configuration

### Despliegue en GitHub Pages

UrbanConnect puede desplegarse sin proceso de construcción porque `index.html` está ubicado en la raíz del repositorio.

Procedimiento:

1. Integrar y subir la versión estable a la rama `main`.
2. Abrir el repositorio en GitHub.
3. Ingresar a **Settings > Pages**.
4. En **Build and deployment**, seleccionar **Deploy from a branch**.
5. Seleccionar la rama `main` y la carpeta `/ (root)`.
6. Guardar la configuración y esperar a que GitHub publique el sitio.

La URL esperada es:

```text
https://soportejbm.github.io/UrbanConnect-LandingPage/
```

Antes de una publicación se debe comprobar que:

- `index.html` abre sin servidor local.
- No existen rutas absolutas hacia archivos del equipo de desarrollo.
- Las imágenes, hojas de estilo y scripts cargan correctamente.
- La navegación funciona con teclado y pantalla táctil.
- El contenido no se desborda en desktop, tablet o móvil.

## 5.2 Product Implementation

### 5.2.1 Módulos implementados

La navegación principal conecta doce páginas HTML:

| Módulo | Archivo | Estado funcional |
| --- | --- | --- |
| Inicio de sesión | `index.html` | Validación local y redirección al dashboard. |
| Registro | `registro.html` | Interfaz disponible; persistencia pendiente. |
| Dashboard | `dashboard.html` | Resumen visual y enlaces internos. |
| Comunicados | `comunicados.html` | Filtros y formulario modal; creación pendiente. |
| Reportes | `reportes.html` | Gestión funcional de incidencias. |
| Servicios | `servicios.html` | Filtros y formulario modal; creación pendiente. |
| Encuestas | `encuestas.html` | Filtros y formulario modal; creación pendiente. |
| Reservas | `reservas.html` | Filtros y formulario modal; creación pendiente. |
| Pagos | `pagos.html` | Gestión simulada de cuotas, morosos, gastos y vouchers. |
| Documentos | `documentos.html` | Filtros y formulario modal; creación pendiente. |
| Accesos | `usuarios.html` | Gestión funcional de paquetes, stock, visitas, personal y mudanzas. |
| Configuración | `configuracion.html` | Interfaz disponible; persistencia pendiente. |

Reservas, encuestas y servicios gestionan su búsqueda, filtrado y apertura de formularios modales desde `js/reservas.js`, `js/encuestas.js` y `js/servicios.js`. Comunicados y documentos conservan estas interacciones mediante `js/filters.js`, que no guarda los formularios. Las funciones completas con persistencia se concentran actualmente en `js/reportes.js`, `js/pagos.js` y `js/usuarios.js`.

Los estilos de pagos, reservas, encuestas, servicios y documentos se mantienen en `css/pagos.css`, `css/reservas.css`, `css/encuestas.css`, `css/servicios.css` y `css/documentos.css`, respectivamente. Las hojas de reservas, encuestas, servicios y documentos ya no importan `css/pagos.css`: cada módulo contiene sus tarjetas, filtros, botones, badges, paneles, estados vacíos y breakpoints responsive. Este desacoplamiento evita que un cambio visual en pagos rompa la presentación de otras páginas.

### 5.2.2 Persistencia

UrbanConnect utiliza `localStorage` como almacenamiento del prototipo:

| Clave | Responsabilidad |
| --- | --- |
| `usuarios` | Usuarios disponibles para autenticación. |
| `usuarioActivo` | Sesión local activa. |
| `uc_reportes_tickets` | Tickets de incidencias. |
| `uc_pagos_cuotas` | Cuotas y pagos simulados. |
| `uc_pagos_vouchers` | Estados de vouchers. |
| `uc_paquetes` | Paquetes recibidos y entregados. |
| `uc_stock` | Control de insumos del gimnasio. |
| `uc_qr_visitas` | Credenciales temporales simuladas. |
| `uc_personal` | Autorizaciones de personal doméstico. |
| `uc_mudanzas` | Mudanzas y órdenes de protección. |

La información permanece solo en el navegador. No existe API, base de datos remota ni sincronización entre dispositivos.

### 5.2.3 User Stories core y trazabilidad

El estado actual incluye 15 historias numeradas con implementación y escenarios Gherkin:

| Área | Historias | Feature |
| --- | --- | --- |
| Reportes | `HU01`, `HU02`, `HU03`, `HU04`, `HU07` | `features/reportes.feature` |
| Pagos | `HU09`, `HU10`, `HU11`, `HU12`, `HU14` | `features/pagos.feature` |
| Accesos | `HU21`, `HU31`, `HU32`, `HU33`, `HU34` | `features/accesos.feature` |

La meta de 30 User Stories core todavía no está completa: faltan 15 historias numeradas con su implementación, persistencia cuando corresponda y escenarios de aceptación.

### 5.2.4 Pruebas de aceptación

Las pruebas se expresan en Gherkin y se distribuyen de la siguiente manera:

| Archivo | Escenarios | Cobertura |
| --- | ---: | --- |
| `features/login.feature` | 5 | Formulario, acceso válido e inválido, registro y responsive. |
| `features/reportes.feature` | 5 | Creación, asignación, evidencias, estados y urgencia. |
| `features/pagos.feature` | 5 | Gastos, cuotas, morosos, recordatorios y vouchers. |
| `features/accesos.feature` | 5 | Paquetes, stock, visitas, personal y mudanzas. |

El repositorio contiene 20 escenarios en total. Los escenarios se ejecutan manualmente durante esta etapa; todavía no existe un runner automatizado de Gherkin.

### 5.2.5 Responsive y accesibilidad

Las hojas de estilo incluyen puntos de quiebre para reorganizar navegación, columnas, formularios, tarjetas y tablas. La validación previa a una publicación debe cubrir desktop, tablet y móvil en Chrome, Edge y Firefox.

Todas las imágenes HTML actuales tienen texto alternativo. Los resultados dinámicos principales de reportes, pagos y accesos disponen de regiones `aria-live`. Como trabajo pendiente deben asociarse labels a algunos filtros y controles de configuración, proporcionar nombres accesibles a botones de icono y verificar navegación completa por teclado.

### 5.2.6 Limitaciones conocidas

- Los formularios de comunicados, documentos, encuestas, reservas y servicios se muestran en modal, pero todavía no crean registros.
- Registro y configuración no conservan cambios.
- Algunos botones de acciones rápidas, filtros y menús contextuales son elementos visuales sin comportamiento asociado.
- La autenticación es una simulación local y no protege las páginas mediante un backend.
- No hay pruebas automatizadas ni integración continua para los escenarios Gherkin.

Estas limitaciones deben cerrarse antes de declarar completas las 30 User Stories core o una versión productiva.
