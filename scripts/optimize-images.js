import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import { join, parse } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputDir = join(__dirname, '../public');
const outputDir = join(__dirname, '../public/img');

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const files = readdirSync(inputDir);
for (const file of files) {
  if (/\.(jpe?g|png)$/i.test(file)) {
    await sharp(join(inputDir, file))
      .resize(1200)
      .webp({ quality: 80 })
      .toFile(join(outputDir, `${parse(file).name}.webp`));
  }
}