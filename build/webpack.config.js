const path = require('path')
const getDirEntries = require('./entries/getDirEntries')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const src = function (...paths) {
  return path.join(__dirname, '../src', ...paths)
}

const content_scripts = getDirEntries('content_scripts')
const inject_scripts = getDirEntries('inject_scripts')

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    'js/background': src('./entries/background'),
    'js/popup': src('./entries/popup'),
    ...content_scripts,
    ...inject_scripts,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': src('')
    }
  },
  output: {
    path: path.resolve(__dirname, '../output'),
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'popup.html',
      template: src('./entries/popup/index.html'),
      chunks: ['js/popup']
    }),
    new HtmlWebpackPlugin({
      filename: 'background.html',
      template: src('./entries/background/index.html'),
      chunks: ['js/background']
    }),
    new FriendlyErrorsPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "public", to: "./" }
      ]
    })
  ],
};