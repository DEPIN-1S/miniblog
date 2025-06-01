import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
    hmr: {
      overlay: false, // Disable HMR overlay to avoid obstruction
    },
  },
  css: {
    postcss: './postcss.config.cjs', // Explicitly point to postcss.config.cjs
  },
});