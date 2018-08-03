const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const settings = require('./../../settings');

gulp.task('images', () =>
  gulp
    .src(`${settings.imageFiles}*`)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest(`${settings.outputFolder}imgs`))
);
