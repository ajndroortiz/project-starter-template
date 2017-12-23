const gulp    = require('gulp');
const sass    = require('gulp-sass');
const postCSS = require('gulp-postcss');
const cssNano = require('cssnano');
const prefix  = require('autoprefixer');

gulp.task('styles', () => {
  return gulp.src('./src/styles/style.scss')
    .pipe(sass())
    .pipe(postCSS([prefix, cssNano]))
    .pipe(gulp.dest('./build/'));
});
