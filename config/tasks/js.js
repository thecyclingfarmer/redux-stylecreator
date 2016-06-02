var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var flatten = require('gulp-flatten');

module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('js', function (cb) {
      browserify({
        entries: 'src/app/index.js',
        debug: true,
      })
      .transform(babelify.configure({
        presets: ['es2015', 'react'],
      }))
      .bundle()
      .pipe(source('src/app/index.js'))
      .pipe(flatten())
      .pipe(gulp.dest('./build/js'));
      cb();
    });
  };
};
