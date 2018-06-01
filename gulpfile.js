var gulp = require('gulp');
var responsive = require('gulp-responsive');
var browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    browserSync.init({
        server: "./",
        port: 8000
    });
    let files = ["css/*.css", "js/*.js", "index.html"];

    files.forEach((file) => {
        gulp.watch(file).on('change', browserSync.reload);
    });
});

gulp.task('images', function () {
    return gulp.src('img/*.jpg')
        .pipe(responsive({
            '*.jpg': [
                {
                    width: 320,
                    rename: {suffix: '-320'}
                },
                {
                    width: 480,
                    rename: {suffix: '-480'}
                },
                {
                    width: 600,
                    rename: {suffix: '-600'}
                },
                {
                    width: 760,
                    rename: {suffix: '-760'}
                },
                {
                    width: 800,
                    rename: {suffix: '-800'}
                }
            ],
        }, {
            quality: 70,
            progressive: true,
            withMetadata: false,
        }))
        .pipe(gulp.dest('responsive_images'))
});

gulp.task('default', []);

