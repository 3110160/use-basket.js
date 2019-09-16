const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const { resolve } = require("path");
module.exports = {
  entry: ["./index"],
  output: {
    path: resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash:5].bound.js"
  },
  optimization: {
    runtimeChunk: {
      name: "runtime"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      inject: false
    }),
    new ManifestPlugin(),
    new CopyPlugin([
      {
        from: "./node_modules/basket.js/dist/basket.full.min.js",
        to: "lib/"
      },{
        from: "./node_modules/localforage/dist/localforage.min.js",
        to: "lib/"
      }
    ])
  ]
};
