'use strict'

const gulp = require('gulp')
const eslint = require('gulp-eslint')

module.exports = () => {
  return gulp.src(['app/**/*.vue', 'app/**/*.js', '_server/**/*.js']) // '!node_modules/**' ','app/**/*.vue''
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
}
