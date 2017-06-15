'use strict';

const gulp = require('gulp')
const bs = require('browser-sync')

/* Server */
gulp.task('browser-sync', ['nodemon'], require('./_server/gulptasks/browserSync'))

gulp.task('nodemon', ['webpack', 'html'], require('./_server/gulptasks/nodemon'))

/* Web Pack */
gulp.task('webpack', ['lint'], require('./_server/gulptasks/webpack'))

gulp.task('webpack:watch', ['webpack'], (done) => {
  done();
  bs.reload();
});

gulp.task('lint', require('./_server/gulptasks/lint'))

gulp.task('html', require('./_server/gulptasks/html'))

/* Default */
gulp.task( 'default', ['webpack', 'html', 'browser-sync'], function () {
  gulp.watch(['app/**/*.js', 'app/**/*.scss', 'app/**/*.html'], ['webpack:watch']);
});
