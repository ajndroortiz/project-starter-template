const gulp = require('gulp');
const settings = require('./../../settings');

gulp.task('content', () => gulp.src('./src/content/**/*').pipe(gulp.dest('./build/')));
