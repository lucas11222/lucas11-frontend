// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },


  integrations: [react()],
  adapter: vercel()
});

// @ts-ignore
function tailwind(arg0) {
  throw new Error('Function not implemented.');
}