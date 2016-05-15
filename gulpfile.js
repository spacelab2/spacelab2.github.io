/*jslint node, maxlen: 120 */

"use strict";
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(minifyCss())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/css'));
});

gulp.task('scripts', function () {
    return gulp.src('public/js/bundle.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js/min'));
});

gulp.task('watch', ['sass', 'scripts'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('public/js/bundle.js', ['scripts']);
});

