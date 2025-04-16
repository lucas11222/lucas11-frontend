// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://lucas11222.github.io',
  base: 'lucas11',


  integrations: [react(), sitemap()],
});

// @ts-ignore
function tailwind(arg0) {
  throw new Error('Function not implemented.');
}