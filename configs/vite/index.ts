/// <reference types="vitest" />

import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import importToCDN from "vite-plugin-cdn-import"; // https://github.com/MMF-FE/vite-plugin-cdn-import

// 依據專案內部的情況所設置 HTML 進入點路徑
const getPageHTML = (rootDir: string, pageName: string) =>
  resolve(rootDir, `${pageName}.html`);

export default function (rootDir: string, pageNames: string[]) {
  return defineConfig({
    cacheDir: "../../node_modules/.vite/hotel",
    plugins: [
      react(),
      tsconfigPaths(),
      // customCssPlugin(),
      importToCDN({
        modules: [
          {
            name: "react",
            var: "React",
            path: `umd/react.production.min.js`,
          },
          {
            name: "react-dom",
            var: "ReactDOM",
            path: `umd/react-dom.production.min.js`,
          },
        ],
      }),
    ],

    server: {
      port: 4200,
      host: "localhost",
    },

    build: {
      assetsDir: "",
      rollupOptions: {
        input: {
          index: resolve(rootDir, "index.html"),
          ...pageNames.reduce(
            (inputConfig: { [key: string]: string }, name) => {
              inputConfig[`${name}`] = getPageHTML(rootDir, name);
              return inputConfig;
            },
            {}
          ),
        },

        output: {
          assetFileNames: ({ name }) => {
            let extType = name?.split(".").at(-1) ?? "";
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              return `assets/[name][extname]`
            }

            return `[name]/[name]-[hash][extname]`;
          },

          // chunkFileNames: "[name]/js/[name]-[hash].js",

          entryFileNames: "[name]/[name]-[hash].js",
        },
      },
    },

    preview: {
      port: 4300,
      host: "localhost",
    },

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
