import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { macaronVitePlugin } from '@macaron-css/vite';

export default defineConfig({
  plugins: [macaronVitePlugin() as any, solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
