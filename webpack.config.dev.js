const { merge } = require("webpack-merge");
const webpack = require("./webpack.config.js");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = merge(webpack, {
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  mode: "development",
  plugins: [
    new ESLintPlugin({
      extensions: ["ts", "tsx"],
      failOnError: false,
    }),
  ],
});
