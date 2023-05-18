/* eslint-disable no-unused-vars */
//webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  build: {
    sourcemap: true,
    sourcemapFile: "./src",
    emptyOutDir: true,
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "app-bundle.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: [/\.js?$/, /\.ts?$/, /\.jsx?$/, /\.tsx?$/],
        enforce: 'pre',
        exclude: /node_modules/,
        use: ['source-map-loader'],
        loader: "ts-loader"
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: path.join(__dirname, './public/**/*.index.html') })],
  ignoreWarnings: [/Failed to parse source map/],
};