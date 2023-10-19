/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import importToCDN from "vite-plugin-cdn-import"; // https://github.com/MMF-FE/vite-plugin-cdn-import

export {default as getTestOptions} from "./test";
export {default as getBuildOptions} from "./build";
export {default as getPreviewOptions} from "./preview";
export {default as getServeOptions} from "./serve";

export const plugins = [
  react(),
  tsconfigPaths(),
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
];
