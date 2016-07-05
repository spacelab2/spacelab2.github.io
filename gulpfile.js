/*jslint node, maxlen: 120 */
"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");
var gutil = require("gulp-util");
var sourcemaps = require("gulp-sourcemaps");
var critical = require('critical');

var sassSrc = "app/scss/**/*.scss";
var sassDest = "public/css";
var jsEntries = "./app/js/main.js";
var jsDest = "public/js";


var sassOptions = {
    errLogToConsole: true,
    outputStyle: "expanded"
};

// Sass with sourcemaps for development.
gulp.task("sass", function () {
    return gulp
        .src(sassSrc)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(sassDest));
});

// JavaScript with sourcemaps for development.
gulp.task("javascript", function () {
    return gulp
        .src(jsEntries)
        .pipe(sourcemaps.init({loadMaps: true}))
        .on("error", gutil.log)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(jsDest));
});


// Minify JavaScript for production
gulp.task("minify-javascript", function () {
  // set up the browserify instance on a task basis
    return gulp
        .src(jsEntries)
        .pipe(uglify())
        .on("error", gutil.log)
        .pipe(gulp.dest(jsDest));
});

// Minify sass for production
gulp.task("minify-css", function () {
    return gulp
        .src(sassSrc)
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(autoprefixer({
            browsers: ["last 2 versions"],
            cascade: false
        }))
        .pipe(gulp.dest(sassDest));
});

// 'Production' task, this will minify css and javascript for production
gulp.task("production", ["minify-css", "minify-javascript"]);


// Watch task for Sass and JavaScript (Unminified with sourcemaps)
gulp.task("watch", ["sass", "javascript"], function () {
    gulp.watch("./app/scss/**/*.scss", ["sass"]);
    gulp.watch("./app/js/main.js", ["javascript"]);
});
