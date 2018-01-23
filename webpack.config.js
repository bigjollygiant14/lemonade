'use strict'

const webpack = require('webpack')
const path = require('path')

const webpackConfig = {
  entry: {
    main: './app/index.js'
  },

  output: {
    filename: 'bundle.js',
    // path: __dirname + '/docs/',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin() // Enable HMR
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    hot: true,
    port: 3000, // Defaults to 8080
    proxy: {
      '/api': 'http://localhost:5000'
    },
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /(node_modules)/,
        use: {
          loader: 'eslint-loader'
        }
      },

      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },

      {
        test: /\.(png|jpg|jpe?g|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        use: {
          loader: 'url-loader?limit=10000'
        }
      }
    ]
  }
}

module.exports = webpackConfig
