import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative, so the build works both on
// <user>.github.io and on the custom heinzawfitness.me domain.
export default defineConfig({
  plugins: [react()],
  base: './',
})
