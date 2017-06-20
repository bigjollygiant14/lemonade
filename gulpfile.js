'use strict';

const gulp = require('gulp')
const bs = require('browser-sync')

/* Server */
gulp.task('browser-sync', ['nodemon'], require('./_server/gulptasks/browserSync'))

gulp.task('nodemon', ['webpack', 'html'], require('./_server/gulptasks/nodemon'))

/* Webpack */
gulp.task('webpack', ['lint'], require('./_server/gulptasks/webpack'))

gulp.task('webpack:watch', ['webpack'], (done) => {
  done();
  bs.reload();
});

gulp.task('lint', require('./_server/gulptasks/lint'))

gulp.task('html', require('./_server/gulptasks/html'))

/* Test */
gulp.task('test', require('./_server/gulptasks/test'))

/* Coverage */
gulp.task('coverage', require('./_server/gulptasks/coverage'))

/* Default */
gulp.task('default', ['test', 'webpack', 'html', 'browser-sync'], () => {
  gulp.watch(['app/**/*.js', 'app/**/*.scss', 'app/**/*.html'], ['test', 'webpack:watch']);
});
