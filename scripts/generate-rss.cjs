const fs = require("fs");
const path = require("path");
const RSS = require("rss");
const { glob } = require("glob");

// Configuración mejorada
const feed = new RSS({
  title: "Galia Cumple",
  description: "Sitio web del cumpleaños de Galia",
  feed_url: "https://galiacumple1.netlify.app/rss.xml",
  site_url: "https://galiacumple1.netlify.app",
  language: "es",
  copyright: `© ${new Date().getFullYear()} Familia de Galia`,
  ttl: 1440,
});

// Función para extraer metadatos de archivos .astro
async function processAstroFiles() {
  try {
    const files = await glob("src/pages/**/*.astro");

    files.forEach((file) => {
      const content = fs.readFileSync(file, "utf8");
      const titleMatch = content.match(/title="([^"]+)"/);
      const descriptionMatch = content.match(/description="([^"]+)"/);

      if (titleMatch) {
        feed.item({
          title: titleMatch[1],
          description: descriptionMatch ? descriptionMatch[1] : "",
          url: `https://galiacumple1.netlify.app${file.replace("src/pages", "").replace(".astro", "")}`,
          date: new Date(),
          guid: file,
        });
      }
    });
  } catch (error) {
    console.error("Error procesando archivos Astro:", error);
  }
}

// Generar el feed
processAstroFiles().then(() => {
  const publicDir = path.join(__dirname, "../public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, "rss.xml"), feed.xml({ indent: true }));
  console.log("✅ RSS generado correctamente");
});
