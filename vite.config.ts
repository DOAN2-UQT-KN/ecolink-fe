import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
  // Environment variables prefixed with VITE_ will be exposed to your source code
  // Access via import.meta.env.VITE_API_GATEWAY_URL
})
