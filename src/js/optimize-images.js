const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../src/assets/images');
const outputDir = path.join(__dirname, '../public/img');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  if (/\.(jpe?g|png)$/i.test(file)) {
    sharp(path.join(inputDir, file))
      .resize(1200)
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, `${path.parse(file).name}.webp`));
  }
});