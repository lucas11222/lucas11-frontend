// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://lucas11222.github.io/lucas11-frontend/',
  base: 'lucas11',


  integrations: [react(), sitemap()]
});

// @ts-ignore
function tailwind(arg0) {
  throw new Error('Function not implemented.');
}