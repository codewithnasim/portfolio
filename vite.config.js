<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
=======
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Set to true to listen on all network interfaces
    port: 5173, // Optional: specify a custom port if needed
  },
>>>>>>> 4e0713b (Initial commit)
});
