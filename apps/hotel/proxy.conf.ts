// Can only use CommonJS !!!!!
module.exports = {
  "/uhotelzkk": {
    target: "https://uhotelzkk.liontravel.com",
    secure: true,
    changeOrigin: true,
    rewrite: (path) => path.replace("/uhotelzkk", ""),
  },
};
