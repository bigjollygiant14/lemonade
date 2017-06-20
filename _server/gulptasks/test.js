'use strict'

const gulp = require('gulp')
const jest = require('gulp-jest').default

// gulp.task('jest', function () {
module.exports = () => {
  return gulp.src('app/**/*.spec.js').pipe(jest({
    config: {
      'transformIgnorePatterns': [
        '<rootDir>/dist/', '<rootDir>/node_modules/'
      ],
      'automock': false
    }
  }))
}
