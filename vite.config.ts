import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.soundon.fm',
        changeOrigin: true,
        rewrite: (apiPath: string) => apiPath.replace(/^\/api/, ''),
      },
    },
  },
})
