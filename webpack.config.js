const path = require('path');

module.exports = {
<<<<<<< HEAD
    mode: 'development',
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
            loader: 'babel-loader',
            query: {
                presets: [ 'env', 'stage-0' ]
            }
        } ]
    }
=======
  entry: {
    app: ['babel-polyfill', './src/js/app.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
>>>>>>> 384bc259ed36da6cfd1a3c8842a62339446391f4
};
