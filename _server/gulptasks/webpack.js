'use strict'

const webpack = require('webpack')
const path = require('path')

module.exports = (cb) => {
  let webpackConfig = {
    entry: [
      './app/index.js'
    ],

    output: {
      path: path.join(__dirname, '../../docs'),
      publicPath: '/docs/',
      filename: 'bundle.js'
    },

    resolve: {
      extensions: ['*', '.js', '.jsx', '.json']
    },

    module: {
      rules: [
        {test: /\.js$/, exclude: /(node_modules)/, use: {loader: 'babel-loader'}},
        {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/, use: {loader: 'url-loader?limit=100000'}},
        // {test: /(\.css|\.scss|\.sass)$/, exclude: /(node_modules)/, use: ['url-loader', 'style-loader', 'css-loader', 'sass-loader']}
        {test: /(\.css|\.scss|\.sass)$/, use: ['style-loader', 'css-loader', 'sass-loader']}
      ]
    }
  }

  return webpack(webpackConfig, function (err, stats) {
    // if (err) throw new gutil.PluginError('webpack:build', err)
    if (err) return err
    cb()
  })
}
