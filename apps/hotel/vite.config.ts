import viteHandler from "../../configs/vite";

const entryPoints = [
  {
    name: "main",
    html: "index.html",
  },
  {
    name: "search",
    html: "src/search/index.html",
  },
];

export default viteHandler(__dirname, entryPoints);
