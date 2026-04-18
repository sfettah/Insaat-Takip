import {defineConfig} from 'vite';

export default defineConfig({
  base: './', // Useful for GitHub Pages
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: false
  },
  build: {
    outDir: 'dist'
  }
});
