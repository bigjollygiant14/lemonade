'use strict';

const path = require('path')
const webpack = require('webpack');

const webpackConfig = {
  entry: './app/main.js',
  output: {
    path: path.join(__dirname, '../../public/app'),
    // publicPath: '/public/app/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            stylus: 'vue-style-loader!css-loader!stylus-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {presets: ['es2015']},
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        loader: 'vue-style-loader!css-loader!stylus-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery'
    })/*,
    new webpack.ProvidePlugin({
      _: 'lodash'
    })*/
  ]
}

module.exports = webpackConfig