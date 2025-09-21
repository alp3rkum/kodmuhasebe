/// <reference types="node" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync } from 'fs';
import { resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: '/kodmuhasebe/',
  plugins: [react(),tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['assets/favicon.ico', 'assets/logo.png','robots.txt','sitemap.xml'],
      manifest: {
        name: 'KodMuhasebe',
        short_name: 'KodMuhasebe',
        description: 'Yazılım projeleri için yapay zeka destekli fiyat hesaplayıcı',
        theme_color: '#1e40af',
        background_color: '#ffffff',
        display: 'standalone',
        id: '/kodmuhasebe/',
        start_url: '/kodmuhasebe',
        icons: [
          {
            src: 'assets/logo-Bxnf2XXj.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'assets/logo-Bxnf2XXj.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
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
