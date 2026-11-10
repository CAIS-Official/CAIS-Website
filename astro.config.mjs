import { defineConfig } from 'astro/config';

export default defineConfig({
  // Reemplaza 'CAIS-Official' por tu usuario/organización real
  site: 'https://CAIS-Official.github.io',
  // El nombre de tu repositorio, empezando con una barra
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