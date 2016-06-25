/*jslint node, maxlen: 120 */
"use strict";

var browserify = require('browserify');
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

var sassSrc = 'app/scss/**/*.scss';
var sassDest = 'public/css';
var jsEntries = './app/js/main.js';
var jsSrc = 'bundle.js';
var jsDest = 'public/js';

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task('sass', function () {
    return gulp
      .src(sassSrc)
      .pipe(sourcemaps.init())
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(sassDest));
});

gulp.task('javascript', function () {
    var b = browserify({
        entries: jsEntries,
        debug: true
    });

    return b.bundle()
      .pipe(source(jsSrc))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
          .on('error', gutil.log)
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(jsDest));
});

gulp.task('minify-javascript', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
      entries: jsEntries,
    debug: true
  });

  return b.bundle()
    .pipe(source(jsSrc))
    .pipe(buffer())
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(gulp.dest(jsDest));
});

gulp.task('minify-css', function () {
    return gulp
      .src(sassSrc)
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(gulp.dest(sassDest));
});

gulp.task('production', ['minify-css', 'minify-javascript']);



gulp.task('watch', ['sass', 'javascript'], function () {
    gulp.watch('./app/scss/**/*.scss', ['sass']);
    gulp.watch('./app/js/main.js', ['javascript']);
});

