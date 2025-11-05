import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Render typically expects a `build` directory (Create React App convention).
    // Vite outputs to `dist` by default; set outDir to `build` so Render's
    // publish directory exists without changing Render settings.
    outDir: "build",
  },
});