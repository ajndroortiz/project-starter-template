const gulp = require('gulp');

gulp.task('content', () => {
  return gulp.src('./src/content/**/*')
    .pipe(gulp.dest('./../'));
});
