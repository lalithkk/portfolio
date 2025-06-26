import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    // This will resolve your __DEFINE__ error
    __DEFINE__: JSON.stringify('vite-internal')
  }
})