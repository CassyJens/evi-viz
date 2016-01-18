var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');

gulp.task('default', function () {
  gulp.src('./src/assets/jsx/components/**/*.jsx')
      .pipe(react())
      .pipe(gulp.dest('./src/assets/js/components/'));

  gulp.src('./src/assets/js/components/App.js')
      .pipe(browserify({
        insertGlobals : true
      }))
      .pipe(gulp.dest('./src/assets/dist/js'));

  return this;
});

var watcher = gulp.watch(
  ['./src/assets/jsx/**/*.jsx', './src/assets/js/services/**/*.js'],
  ['default']
);

watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
