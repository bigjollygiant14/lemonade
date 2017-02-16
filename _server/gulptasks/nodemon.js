'use strict';

const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const browserSync = require('browser-sync')

module.exports = (cb) => {
  let callbackCalled = false;
  
  return nodemon({
    script: 'server.js',
    ignore: 'app'
  })
  .on('start', function () {
    if ( !callbackCalled ) {
      callbackCalled = true;
      cb();
    }
  })
  .on('restart', () => {
    browserSync.reload();
  });
}