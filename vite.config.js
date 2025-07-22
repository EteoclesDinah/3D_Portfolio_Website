import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 

// ✅ No need to import tailwindcss or postcss here

// https://vite.dev/config/
export default defineConfig({

  //for loading assets
  base: './',    
  
  plugins: [
    react(),
  ],

  assetsInclude: ['**/*.glb'],

   // ✅ Tailwind is handled automatically via PostCSS
  
})
