import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/jokes': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/jokes/, '') // Strip '/jokes' from the request path
      }
    }
  },
  plugins: [react()],
})
