var gulp = require('gulp');
var less = require('gulp-less');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', ['less'], function () {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('src/less/*.less', ['less']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('less', function() {
    gulp.src('src/less/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['browserSync', 'watch']);

