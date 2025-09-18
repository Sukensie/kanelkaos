import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  base: '/kanelkaos/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    proxy: {
      '/calendly': {
        target: 'https://calendly.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/calendly/, ''),
      }
    }
  }
})
