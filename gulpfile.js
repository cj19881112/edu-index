var gulp = require('gulp'),
	sass = require('gulp-sass');
	conn = require('gulp-connect');

/**
 * 编译sass文件
 */
gulp.task('sass', function() {
	gulp.src('src/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/'))
		.pipe(conn.reload());
});

gulp.task('html', function(){
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist/'))
		.pipe(conn.reload());
});

gulp.task('js', function(){
	gulp.src('src/*.js')
		.pipe(gulp.dest('dist/'))
		.pipe(conn.reload());
});

gulp.task('server', function(){
	conn.server({
		port: 9999,
		root: 'dist',
		livereload: true
	});
});

/**
 * 监视文件的变化
 */
var watcher = gulp.task('watch', ['sass'], function(file) {
	function reload(file) {
		console.log('change:', file);
	}

	gulp.watch('src/*.scss', ['sass']).on('change', reload);
	gulp.watch('src/*.html', ['html']).on('change', reload);
	gulp.watch('src/*.js', ['js']).on('change', reload);
});


gulp.task('default', ['server', 'watch']);


