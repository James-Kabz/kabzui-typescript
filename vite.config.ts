import { fileURLToPath, URL } from 'node:url'
import { dirname, resolve } from "node:path"

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "KABZUI",
      formats: ["es", "cjs"],
      fileName: (format) => {
        if (format === "es") return "index.esm.js"
        if (format === "cjs") return "index.js"
        return `index.${format}.js`
      },
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "css"
          return assetInfo.name!
        },
      },
    },
    copyPublicDir: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
