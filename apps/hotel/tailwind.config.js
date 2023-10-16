/** @type {import('tailwindcss').Config} */
const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");
const tailwindConfigs = require("../../configs/tailwind");

module.exports = {
  content: [
    join(__dirname, "src/**/*!(*.stories|*.spec).{ts,tsx,html}"),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  ...tailwindConfigs,
};
