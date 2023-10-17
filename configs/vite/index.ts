/// <reference types="vitest" />

import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

interface EntryPoint {
  name: string;
  html: string;
}

export default function (rootDir: string, entryPoints: EntryPoint[]) {
  return defineConfig({
    cacheDir: "../../node_modules/.vite/hotel",

    server: {
      port: 4200,
      host: "localhost",
    },

    build: {
      rollupOptions: {
        // input: entryPoints.reduce(
        //   (inputConfig: { [key: string]: string }, entry) => {
        //     inputConfig[entry.name] = resolve(rootDir, entry.html);
        //     return inputConfig;
        //   },
        //   {}
        // ),
      },
    },

    preview: {
      port: 4300,
      host: "localhost",
    },

    plugins: [react(), tsconfigPaths()],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },

    define: {
      "import.meta.vitest": undefined,
    },
    test: {
      includeSource: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
      globals: true,
      cache: { dir: "../../node_modules/.vitest" },
      environment: "jsdom",
      include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    },
  });
}
