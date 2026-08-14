// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-phi-murex-50.vercel.app',

  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true
    }
  },

  redirects: {
    '/': '/es'
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()]
});