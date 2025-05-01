/**
 * Script de optimizaciones para el sitio web del cumpleaños de Galia
 */

// Función para detectar capacidades del navegador
function detectBrowserCapabilities() {
  const capabilities = {
    intersectionObserver: "IntersectionObserver" in window,
    webp: false,
    connection:
      "connection" in navigator ? navigator.connection.effectiveType : "4g",
    prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches,
    touchDevice: "ontouchstart" in window || navigator.maxTouchPoints > 0,
  };

  // Detección de soporte para WebP
  const webpTest = new Image();
  webpTest.onload = function () {
    capabilities.webp = true;
  };
  webpTest.onerror = function () {
    capabilities.webp = false;
  };
  webpTest.src =
    "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";

  return capabilities;
}

// Función para optimizar carga de recursos
function optimizeResourceLoading() {
  const capabilities = detectBrowserCapabilities();

  // Añadir clase para detectar capacidades
  document.documentElement.classList.add(
    capabilities.prefersReducedMotion ? "reduced-motion" : "allow-motion",
    capabilities.touchDevice ? "touch-device" : "no-touch",
  );

  // Optimizar carga de imágenes
  if (capabilities.intersectionObserver) {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          // Cargar la versión WebP si está soportada
          if (capabilities.webp && img.dataset.webp) {
            img.src = img.dataset.webp;
          } else if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          img.classList.add("loaded");
          imgObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imgObserver.observe(img);
    });
  } else {
    // Fallback para navegadores antiguos
    document.querySelectorAll("img[data-src]").forEach((img) => {
      if (capabilities.webp && img.dataset.webp) {
        img.src = img.dataset.webp;
      } else {
        img.src = img.dataset.src;
      }
      img.classList.add("loaded");
    });
  }

  // Reducir animaciones si es necesario
  if (capabilities.prefersReducedMotion) {
    document.querySelectorAll(".animate__animated").forEach((el) => {
      el.classList.remove("animate__animated");
      el.classList.remove(/animate__\w+/);
    });

    // Modificar configuración de particles.js
    if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
      window.pJSDom[0].pJS.particles.move.speed = 0.5;
    }
  }

  // Reducir calidad de recursos en conexiones lentas
  if (
    capabilities.connection === "slow-2g" ||
    capabilities.connection === "2g"
  ) {
    // Disminuir partículas
    if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
      window.pJSDom[0].pJS.particles.number.value = 30;
      window.pJSDom[0].pJS.fn.particlesRefresh();
    }

    // Cargar imágenes de menor calidad
    document.querySelectorAll("img[data-low-src]").forEach((img) => {
      img.src = img.dataset.lowSrc;
    });
  }
}

// Inicializar optimizaciones cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", optimizeResourceLoading);

// Exportar funciones para uso en componentes
export { detectBrowserCapabilities, optimizeResourceLoading };
