import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Firebase chunks
          if (id.includes("firebase")) {
            return "firebase";
          }
          // Vue and major dependencies
          if (id.includes("vue") || id.includes("pinia")) {
            return "vendor";
          }
          // Locale files
          if (id.includes("locales")) {
            return "locales";
          }
          // UI components
          if (id.includes("components")) {
            return "components";
          }
          // Admin-related code
          if (id.includes("admin")) {
            return "admin";
          }
        },
      },
    },
  },
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
