'use strict';

var gulp = require('gulp'),
	less = require('gulp-less');

gulp.task("style", function() {
	return gulp.src('less/style.less')
	.pipe(less([
		paths: [path.join(__dirname,)]
		]))
});