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
  output: 'server',
  integrations: [react(), sitemap()],
  adapter: cloudflare()
});

// @ts-ignore
function tailwind(arg0) {
  throw new Error('Function not implemented.');
}