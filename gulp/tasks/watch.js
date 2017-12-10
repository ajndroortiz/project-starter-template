const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('watch', () => {
    browserSync.init({
        notify: false,
        server: {
            baseDir: './build/'
        }
    });

    gulp.watch('./src/content/**/*', () => {
        gulp.start('contentMove');
    });

    gulp.watch('./src/js/**/*.js', () => {
        gulp.start('jsInject');
    });

    gulp.watch('./src/styles/**/*', () => {
        gulp.start('styleInject');
    });

    gulp.task('contentMove', ['content'], () => {
        browserSync.reload();
    });

    gulp.task('styleInject', ['styles'], () => {
        return gulp.src('./build/style.css')
            .pipe(browserSync.stream());
    });

    gulp.task('jsInject', ['scripts'], () => {
        browserSync.reload();
    });
});
