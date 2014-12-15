var gulp = require('gulp');
var sass = require('gulp-sass');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');

var basefile = "./www";
var sass_dir = basefile + "/sass";
var markup_dir =  basefile + "/templates";

var build_dir = "./build";
var css_dir = build_dir + "/css";
var js_dir = build_dir + "/js";



gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('sass', function () {
  gulp.src(sass_dir + "/**/*.{sass,scss}")
  .pipe(sass())
  .pipe(gulp.dest(css_dir));
});

gulp.task('markup', function(){
  gulp.src(markup_dir + '/**/*.hbs')
  .pipe(handlebars())
  .pipe(wrap('Handlebars.template(<%= contents %>)'))
  .pipe(declare({
    namespace: 'App.templates',
    noRedeclare: true, // Avoid duplicate declarations
  }))
  .pipe(concat('templates.js'))
  .pipe(gulp.dest(js_dir));
});
