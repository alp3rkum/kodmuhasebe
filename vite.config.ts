/// <reference types="node" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync } from 'fs';
import { resolve } from 'path';


// https://vite.dev/config/
export default defineConfig({
  base: '/kodmuhasebe/',
  plugins: [react(),tailwindcss()],
  build: {
    rollupOptions: {
      // build sonrası hook
      plugins: [
        {
          name: 'copy-seo-files',
          writeBundle() {
            const filesToCopy = ['robots.txt', 'sitemap.xml'];
            filesToCopy.forEach(file => {
              const srcPath = resolve(__dirname, 'src', file);
              const destPath = resolve(__dirname, 'dist', file);
              copyFileSync(srcPath, destPath);
              console.log(`📦 ${file} kopyalandı → dist`);
            });
          }
        }
      ]
    }
  }
})
