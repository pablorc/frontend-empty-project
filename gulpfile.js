var gulp = require('gulp');
var sass = require('gulp-sass');

var basefile = "./www";
var sass_dir = basefile + "/sass";
var css_dir = basefile + "/css";


gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('sass', function () {
  gulp.src(sass_dir + "/**/*.{sass,scss}")
  .pipe(sass())
  .pipe(gulp.dest(css_dir));
});
