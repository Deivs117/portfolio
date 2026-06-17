import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://Deivs117.github.io',
  base: '/portfolio',
  integrations: [tailwind()],
});
