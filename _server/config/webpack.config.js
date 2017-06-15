/* 'use strict'

const path = require('path')
const webpack = require('webpack')

const webpackConfig = {
  entry: './app/main.js',
  output: {
    path: path.join(__dirname, '../../public/app'),
    publicPath: '/public/app/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {presets: ['es2015']},
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = webpackConfig */
