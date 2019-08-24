const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
  entry: {
    app: [
	"babel-polyfill", 
	"whatwg-fetch",
      './src/app.js',
    ],
  },
  devtool: 'inline-source-map',
     devServer: {
     contentBase: './',
	 publicPath: '/dist/',
	 hot: true
   },
    plugins: [],
  output: {
	filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
}
};