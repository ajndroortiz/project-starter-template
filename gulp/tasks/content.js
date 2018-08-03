const gulp = require('gulp');
const settings = require('./../../settings');

gulp.task('content', () => gulp.src(`${settings.contentFiles}**/*`).pipe(gulp.dest(settings.outputFolder)));
