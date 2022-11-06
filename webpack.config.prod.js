const { merge } = require("webpack-merge");
const webpack = require("./webpack.config.js");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = merge(webpack, {
  mode: "production",
  devtool: "nosources-source-map",
  plugins: [
    new ESLintPlugin({
      extensions: ["ts", "tsx"],
      failOnError: true,
      failOnWarning: true,
    }),
  ],
});
