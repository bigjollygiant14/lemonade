'use strict';

let gulp = require( 'gulp' ),
    bs = require( 'browser-sync' ),
    reload = bs.reload,
    nodemon = require( 'gulp-nodemon' ),
    source = require( 'vinyl-source-stream' ),
    path = require( 'path' ),
    webpack = require( 'webpack' );

/* Server */
gulp.task( 'browser-sync', ['nodemon'], () => {
  bs.init(null, {
    proxy: 'localhost:5000',
  });
});

gulp.task( 'nodemon', ['webpack', 'html'], ( cb ) => {
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

/* Web Pack */
gulp.task( 'webpack', [], (cb) => {
  let webpackConfig = {
    entry: './app/main.js',
    output: {
      path: path.resolve(__dirname, './public/app'),
      publicPath: '/public/app/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              stylus: 'vue-style-loader!css-loader!stylus-loader'
            }
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.styl$/,
          loader: 'vue-style-loader!css-loader!stylus-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.common.js'
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        jQuery: 'jquery'
      })
    ]
  };

  return webpack(webpackConfig, function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }
    cb();
  });
});

gulp.task( 'webpack:watch', ['webpack'], (done) => {
  done();
  reload();
});

/* HTML */
gulp.task( 'html', () => {
  return gulp.src( 'app/index.html' )
    .pipe( gulp.dest( 'public/app' ) );
});

/* Default */
gulp.task( 'default', ['webpack', 'html', 'browser-sync'], function () {
  gulp.watch(['app/**/*.vue', 'app/**/*.styl', 'app/**/*.js'], ['webpack:watch']);
});
