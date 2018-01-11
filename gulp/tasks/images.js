const gulp     = require('gulp');
const imagemin = require('gulp-imagemin');
const settings = require('./../../settings');

gulp.task('images', () => {
  return gulp.src(settings.imageFiles + '*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest(settings.outputFolder + 'imgs/'));
});
