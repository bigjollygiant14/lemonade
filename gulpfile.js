'use strict';

let gulp = require( 'gulp' ),
    bs = require( 'browser-sync' ),
    reload = bs.reload,
    nodemon = require( 'gulp-nodemon' );

/* Server */
gulp.task( 'browser-sync', ['nodemon'], function() {
  bs.init(null, {
    proxy: 'localhost:5000',
  });
});

gulp.task( 'nodemon', function ( cb ) {
  var callbackCalled = false;
  return nodemon( {script: './server.js'} ).on('start', function () {
    if ( !callbackCalled ) {
      callbackCalled = true;
      cb();
    }
  });
});

/* Default */
gulp.task( 'default', ['browser-sync'], function () {
  // gulp.watch(["./src/views/*.html"], reload);
});
