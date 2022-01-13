const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
    // print: "./src/print.js",
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "管理资源",
      // filename: "index.[contenthash].html",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    // chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    usedExports: true,
  },
};
