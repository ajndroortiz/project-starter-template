const gulp     = require( 'gulp' );
const sass     = require( 'gulp-sass' );
const postCSS  = require( 'gulp-postcss' );
const cssNano  = require( 'cssnano' );
const prefix   = require( 'autoprefixer' );
const settings = require( './../../settings' );

gulp.task( 'styles', () => {
    return gulp.src( settings.stylingFiles + 'style.scss' )
        .pipe( sass() )
        .pipe( postCSS( [prefix, cssNano] ) )
        .pipe( gulp.dest( settings.outputFolder ) );
} );
