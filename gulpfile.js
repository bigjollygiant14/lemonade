'use strict';

let gulp = require( 'gulp' ),
    bs = require( 'browser-sync' ),
    reload = bs.reload,
    nodemon = require( 'gulp-nodemon' ),
    browserify = require( 'browserify' ),
    babelify = require( 'babelify' ),
    source = require( 'vinyl-source-stream' ),
    vueify = require( 'vueify' );

/* Server */
gulp.task( 'browser-sync', ['nodemon'], () => {
  bs.init(null, {
    proxy: 'localhost:5000',
  });
});

gulp.task( 'nodemon', ['browserify', 'html'], ( cb ) => {
  var callbackCalled = false;
  return nodemon({
    script: './server.js',
    ignore: 'app'
    // tasks: ['reload']
  })
  .on('start', function () {
    if ( !callbackCalled ) {
      callbackCalled = true;
      cb();
    }
  })
  .on('restart', () => {
    reload();
  });
});

/* Browserify */
gulp.task( 'browserify', [], () => {
   return browserify( {entries: ['app/main.js']} )
    .transform( babelify )
    .transform( vueify )
    .bundle()
    .pipe( source( 'bundle.js' ) )
    .pipe( gulp.dest( 'public/app' ) );
});

gulp.task( 'browserify:watch', ['browserify'], (done) => {
  done();
  reload();
});

/* HTML */
gulp.task( 'html', () => {
  return gulp.src( 'app/index.html' )
    .pipe( gulp.dest( 'public/app' ) );
});

/* Default */
gulp.task( 'default', ['browserify', 'html', 'browser-sync'], function () {
  gulp.watch(['app/**/*.vue', 'app/**/*.styl', 'app/**/*.js'], ['browserify:watch']);
});
