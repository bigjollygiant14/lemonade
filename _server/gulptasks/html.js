'use strict';

const gulp = require('gulp')

module.exports = () => {
  return gulp.src('app/index.html')
    .pipe( gulp.dest('public/app'));
}
