// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://studiolorenapaiva.com.br',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    domains: ['images.unsplash.com'],
  },
});
