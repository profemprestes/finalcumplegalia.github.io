# Galia cumple 1 año! 🎉

¡Bienvenidos al sitio web de celebración del primer año de Galia! Este proyecto es una página web interactiva creada para conmemorar este especial momento. El objetivo es proporcionar una experiencia memorable y visualmente atractiva para celebrar este hito importante.

## Índice

- [Tecnologías utilizadas](#rocket-tecnologías-utilizadas)
- [Estructura del proyecto](#📂-estructura-del-proyecto)
- [Características principales](#✨-características-principales)
- [Cómo ejecutar el proyecto](#🛠️-cómo-ejecutar-el-proyecto)
- [Despliegue](#🌐-despliegue)
- [Notas adicionales](#📝-notas-adicionales)
- [Contribución](#🤝-contribución)
- [Créditos](#👤-créditos)

## 🚀 Tecnologías utilizadas

- **Astro**: Framework moderno para construir sitios web rápidos y eficientes.

  - Permite la composición de componentes de múltiples frameworks (React, Vue, etc.) en un solo proyecto
  - Optimiza automáticamente los assets y reduce el tamaño de la página final
  - Soporte para Render Side y Render Static

- **Tailwind CSS**: Framework de utilidades CSS para estilos personalizados.

  - Proporciona una metodología utility-first para el diseño
  - Permite personalización total de la paleta de colores y estilos
  - Integración perfecta con Astro mediante plugins

- **Particles.js**: Biblioteca para efectos de partículas interactivas.

  - Crea efectos visuales impresionantes con partículas animadas
  - Integración directa con cualquier proyecto web
  - Personalización completa mediante configuración JSON

- **GSAP**: Biblioteca para animaciones fluidas y de alto rendimiento.
  - Control preciso sobre las animaciones con una API intuitiva
  - Soporte para animaciones complejas y secuencias de animación
  - Optimizado para dispositivos móviles y navegadores antiguos

## 📂 Estructura del proyecto

```
.
├── public/            # Assets estáticos (imágenes, favicons)
│   ├── images/        # Imágenes estáticas
│   └── favicons/      # Iconos de la aplicación
├── src/
│   ├── assets/        # SVG y recursos gráficos
│   ├── components/    # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ParticleBackground.astro
│   ├── layouts/       # Plantillas base
│   │   └── BaseLayout.astro
│   ├── pages/         # Páginas principales
│   │   ├── index.astro
│   │   └── about.astro
│   └── styles/        # Archivos CSS personalizados
│       └── main.css
├── astro.config.mjs   # Configuración de Astro
├── tailwind.config.js # Configuración de Tailwind
└── package.json       # Dependencias y scripts
```

## ✨ Características principales

1. **Página de carga animada** con efecto de partículas que crea una experiencia de ingreso impactante
2. **Cuenta regresiva interactiva** hasta el día del evento con animaciones fluidas
3. **Sección hero** con información destacada y llamado a la acción
4. **Diseño responsivo** que se adapta perfectamente a todos los dispositivos (desktop, tablet, móvil)
5. **Efectos visuales** con animaciones CSS y GSAP en transiciones de página
6. **Integración de redes sociales** para compartir fácilmente el contenido
7. **Optimización de rendimiento** con carga lazy de imágenes y componentes
8. **Accesibilidad** mejorada con atributos ARIA y contraste de colores adecuado

## 🛠️ Cómo ejecutar el proyecto

### Requisitos previos

- Node.js v14+ instalado en su sistema
- npm v6+ o yarn v1+

### Pasos

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-repositorio/galia-anniversary.git
cd galia-anniversary
```

2. Instalar dependencias:

```bash
npm install
# o si usas yarn
yarn install
```

3. Ejecutar en modo desarrollo:

```bash
npm run dev
# o si usas yarn
yarn dev
```

El servidor de desarrollo se iniciará en `http://localhost:3000`

4. Construir para producción:

```bash
npm run build
# o si usas yarn
yarn build
```

El contenido estará disponible en la carpeta `dist/`

5. Visualizar la versión de producción localmente:

```bash
npm run preview
# o si usas yarn
yarn preview
```

## 🌐 Despliegue

El sitio está configurado para desplegarse en Netlify con las siguientes características:

- **Compresión automática de assets**: Todas las imágenes y archivos estáticos son comprimidos automáticamente
- **Caching eficiente**: Configuración de headers Cache-Control para mejorar el rendimiento
- **Generación de sitemap**: Creación automática del sitemap.xml para SEO
- **Redirecciones configuradas**: Manejo de redirecciones para URLs antiguas o páginas no encontradas
- **Previsualización de despliegues**: Cada push a una rama crea un despliegue de previsualización

También puede desplegarse en Vercel o GitHub Pages con mínimas modificaciones en la configuración.

## 📝 Notas adicionales

El proyecto utiliza una paleta de colores cálidos y acogedores:

- Color primario: `#ccd5ae` (verde suave)
- Color secundario: `#fefae0` (amarillo pálido)
- Color de acento: `#d4a373` (café)
- Color de texto principal: `#555555`

### Herramientas adicionales utilizadas

- **ESLint**: Para garantizar la calidad del código JavaScript
- **Prettier**: Para formateo automático del código
- **ImageOptim**: Para compresión de imágenes
- **Lighthouse**: Para auditorías de rendimiento y accesibilidad

## 🤝 Contribución

¡Contribuciones son bienvenidas! Si desea contribuir al proyecto, siga estos pasos:

1. Fork este repositorio
2. Crea una rama para tu característica: `git checkout -b feature/NombreCaracterística`
3. Realiza tus cambios y haz commit: `git commit -m "Agrega nueva característica"`
4. Push a la rama: `git push origin feature/NombreCaracterística`
5. Abre un Pull Request

## 👤 Créditos

- **Diseño y maquetación**: Equipo de diseño de Galia
- **Desarrollo frontend**: Matías y colaboradores
- **Animaciones**: Equipo de desarrollo
- **Contenido**: Redacción y gestión de contenido de Galia

¡Esperamos que disfrutes explorando este sitio tanto como nosotros disfrutamos creándolo! 🎉

---

¡Disfruta de la celebración virtual de Galia! 🎂✨
