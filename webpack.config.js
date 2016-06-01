'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');
var entryPoints = ['./src/index.js'];

module.exports = {
  entry: {
    'web-synth': entryPoints
  },

  output: {
    path: 'dist',
    filename: '[name]-bundle.js',
    pathinfo: true
  },

  resolve: {
    extensions: ['', '.es6', '.js', '.scss']
  },

  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html',
    inject: 'body'
  })],

  devtool: 'source-map',

  module: {
    loaders: [{
      test: /\.es6$/,
      loader: 'babel',
      exclude: /node_modules/
    },
    {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass?sourceMap',
      exclude: /node_modules/
    }]
  }
};
