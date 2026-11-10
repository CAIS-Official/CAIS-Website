import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://CAIS-Official.github.io',
  base: '/studio/', 
  i18n: {
    defaultLocale: 'en', 
    locales: ['en', 'es'], 
    routing: {
      prefixDefaultLocale: true, 
      redirectToDefaultLocale: true, 
    },
  },
});