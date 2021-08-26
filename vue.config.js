const path = require("path");
module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "My Store",
    },
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/assets/sass/main.scss")],
    },
  },
};
