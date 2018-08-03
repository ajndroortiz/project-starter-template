const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: ['babel-polyfill', './src/js/app.js']
    },
    output: {
        path: path.resolve(__dirname, './build/js'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0']
                }
            }
        ]
    }
};
