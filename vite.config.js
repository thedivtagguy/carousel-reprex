import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
const CWD = process.cwd();
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      emitCss: false,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, `${CWD}/src/main.js`),
      name: "carouselComponent",
      fileName: "carousel-component",
      formats: ["es"],
    },
  },
});
