import { defineConfig } from 'astro/config';

export default defineConfig({
  // Organizacion nombre
  site: 'https://CAIS-Official.github.io',
  // nombre del repositorio
  base: '/CAIS-Website', 
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});