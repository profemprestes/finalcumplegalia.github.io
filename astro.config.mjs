import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind(),
    compress(),
    sitemap()
  ],
  redirects: {
    '/': '/carga'
  },
  image: {
    domains: ['astro', 'localhost'],
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});