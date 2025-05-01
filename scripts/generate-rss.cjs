const fs = require('fs');
const path = require('path');
const RSS = require('rss');

// Configuración mejorada del feed RSS
const feed = new RSS({
  title: "Galia Cumple",
  description: "Sitio web del cumpleaños de Galia",
  feed_url: "https://galiacumple1.netlify.app/rss.xml",
  site_url: "https://galiacumple1.netlify.app",
  language: "es",
  copyright: `© ${new Date().getFullYear()} Galia Cumple`,
  managingEditor: "info@galiacumple1.netlify.app",
  webMaster: "info@galiacumple1.netlify.app",
  ttl: 60, // Tiempo de vida en minutos
});

// Función para agregar items desde archivos Markdown o JSON
function addItemsFromContent() {
  try {
    // Aquí podrías leer desde una carpeta de posts
    // Ejemplo básico:
    feed.item({
      title: "Celebración del Primer Año",
      description: "Todos los detalles sobre la celebración del primer año de Galia",
      url: "https://galiacumple1.netlify.app/post/celebración",
      guid: "celebración-primer-año",
      date: new Date(),
      categories: ['Celebración', 'Primer Año'],
      author: 'Familia de Galia',
    });
    
    // Agregar más items según sea necesario
  } catch (error) {
    console.error('Error al agregar items al RSS:', error);
  }
}

// Generar el feed
addItemsFromContent();

// Crear directorio public si no existe
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Generar el archivo XML con manejo de errores
try {
  const rssPath = path.join(publicDir, 'rss.xml');
  fs.writeFileSync(rssPath, feed.xml({ indent: true }));
  console.log(`✅ RSS generado correctamente en ${rssPath}`);
  console.log(`⏱ Última actualización: ${new Date().toLocaleString()}`);
} catch (error) {
  console.error('❌ Error al generar el RSS:', error);
  process.exit(1);
}