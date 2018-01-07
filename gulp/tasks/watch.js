const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const settings    = require('./../../settings');

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: settings.outputFolder
    }
  });

  gulp.watch(settings.contentFiles + '**/*', () => {
    gulp.start('contentMove');
  });

  gulp.watch(settings.scriptFiles + '**/*.js', () => {
    gulp.start('jsInject');
  });

  gulp.watch(settings.stylingFiles + '**/*', () => {
    gulp.start('styleInject');
  });

  gulp.task('contentMove', ['content'], () => {
    browserSync.reload();
  });

  gulp.task('styleInject', ['styles'], () => {
    return gulp.src(settings.outputFolder + 'style.css')
      .pipe(browserSync.stream());
  });

  gulp.task('jsInject', ['scripts'], () => {
    browserSync.reload();
  });
});
