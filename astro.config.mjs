import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cais-official.github.io', // Ajusta cuando tengas el repo
  // base: '/nombre-repo', // Descomenta si NO usas dominio propio ni repo .github.io
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true, // Redirige / -> /es/
    },
  },
});