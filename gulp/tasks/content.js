const gulp     = require('gulp');
const settings = require('./../../settings');

gulp.task('content', () => {
  return gulp.src(settings.contentFiles + '**/*')
    .pipe(gulp.dest(settings.outputFolder));
});
