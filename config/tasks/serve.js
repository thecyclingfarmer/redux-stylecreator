module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('serve', function () {
        gulp.watch(['src/app/**/*.js', '*.html', 'src/app/**/*.html', 'src/app/**/*.scss'], ['build']);
    });
  };
};
