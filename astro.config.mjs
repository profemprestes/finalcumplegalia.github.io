import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  site: "https://galiacumple1.netlify.app", // Añadir para sitemap
  integrations: [
    tailwind({
      // Configuración optimizada de Tailwind
      applyBaseStyles: false, // Permite gestionar mejor la importación
    }),
    compress({
      // Mejora la compresión
      css: true,
      html: true,
      img: true,
      js: true,
      svg: true,
    }),
    sitemap(),
  ],
  redirects: {
    "/": "/carga",
  },
  image: {
    domains: ["astro", "localhost"],
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  // Añadir configuración de rendimiento
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Separar librerías grandes en chunks separados
            animations: ["animate.css"],
            utils: ["date-fns"],
          },
        },
      },
      // Minimizar para producción
      minify: true,
    },
    // Optimizar la precarga de assets
    ssr: {
      noExternal: ["animate.css"],
    },
  },
});
