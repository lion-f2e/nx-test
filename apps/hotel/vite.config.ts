import { defineConfig } from "vite";
import {
  plugins,
  getTestOptions,
  getBuildOptions,
  getPreviewOptions,
  getServeOptions,
} from "../../configs/vite";

const pageNames = ["search", "detail"];

export default defineConfig(() => {
  return {
    define: { "import.meta.vitest": undefined },
    cacheDir: "../../node_modules/.vite/hotel",

    plugins: [...plugins],

    server: { ...getServeOptions() },

    build: { ...getBuildOptions(__dirname, pageNames) },

    preview: { ...getPreviewOptions() },

    test: { ...getTestOptions() },

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },
  };
});
