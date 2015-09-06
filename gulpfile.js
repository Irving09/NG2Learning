var gulp 	= require('gulp');
var tsc 	= require('gulp-typescript');
var tslint 	= require('gulp-tslint');

var ts_lint_config = {
	configuration: {
		rules: {
			curly: true,
			'no-console': [true, 'debug', 'info'],
			'no-trailing-whitespace': true,
			quotemark: [true, 'single'],
			semicolon: true
		}
	}
};

gulp.task('lint', function() {
	return gulp.src('./app/**/*.ts')
		.pipe(tslint(ts_lint_config))
        .pipe(tslint.report('full'));
});

gulp.task('compile', ['lint'], function() {
	return gulp.src(['./app/**/*.ts', './typings/**/*.ts'])
		.pipe(tsc({ targetL : 'ES5'}))
		.pipe(gulp.dest('./app.bin'));
});

gulp.task('watch', function() {
	return gulp.watch('./app/**/*.ts', ['lint', 'compile']);
});

gulp.task('default', [
	'lint',
	'compile'
]);