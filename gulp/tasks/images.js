const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('images', () => {
  return gulp.src('./src/images/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest('./build/imgs/'));
});
