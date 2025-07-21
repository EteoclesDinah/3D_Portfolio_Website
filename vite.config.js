import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  //for loading assets
  base: './',    
  
  plugins: [
    react(),
    tailwindcss(),
  ],

  assetsInclude: ['**/*.glb']
  
})
