var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var mocha = require('gulp-mocha');

var _modelsFolder = 'models/**/*.js';
var _testsFolder = 'tests/**/*.js';

gulp.task('mocha-watch', function() {
	return gulp.watch([_testsFolder, _modelsFolder], ['mocha']);
});

gulp.task('mocha', function() {
	return gulp.src([_testsFolder, _modelsFolder], {
		read: false
	}).pipe(mocha({
		reporter: 'spec'
	}));
});

gulp.task('default', ['mocha-watch']);