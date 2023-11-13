import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  optimizeDeps: {
    exclude: ['buffer', 'jsonwebtoken'] // Excluye 'buffer' y 'jsonwebtoken' de la externalización
  }
})
