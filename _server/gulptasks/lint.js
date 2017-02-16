'use strict';

const gulp = require('gulp')
const eslint = require('gulp-eslint')

module.exports = () => {
  return gulp.src(['app/main.js', 'app/App.vue', 'app/components/**.vue']) // '!node_modules/**' ','app/**/*.vue''
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}