import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Vite outputs the build files here
  },
  base: '/', // Ensure this is '/' for Vercel
});
