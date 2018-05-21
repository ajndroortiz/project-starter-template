const path = require( 'path' );

module.exports = {
    entry: {
        app: [ 'babel-polyfill', './src/js/app.js' ]
    },
    output: {
        path: path.resolve( __dirname, './build/js' ),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [ {
            test: /\.js?$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        } ]
    }
};
