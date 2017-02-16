'use strict';

const gulp = require('gulp')
const webpack = require('webpack')

module.exports = (cb) => {
  return webpack(require('../config/webpack.config.js'), function(err, stats) {
    if (err) throw new gutil.PluginError('webpack:build', err);
    cb();
  });
}
