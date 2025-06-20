const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const dotenv = require("dotenv");
const { DefinePlugin } = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    clean: true,
    path: path.join(__dirname, "/build"),
    filename: "bundle.[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss?$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { url: false } },
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: ["src/scss/variables.scss", "src/scss/mixins.scss"],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [new TsconfigPathsPlugin({})],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new CopyPlugin({
      patterns: [{ from: "./public/img", to: "./public/img" }],
    }),
    new DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed),
    }),
  ],
};
