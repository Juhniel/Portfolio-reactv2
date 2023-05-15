import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// const repoBase = process.env.NODE_ENV === 'production' ? '/Portfolio-reactv2/' : '/';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:  '/Portfolio-reactv2/',
  // build: {
  //   outDir: "docs",
  // },
})