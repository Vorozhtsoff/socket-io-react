var path = require('path');

module.exports = {
    entry: {
        main: ['./src/index.js'],
        dev: ['./test-app/index.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/')
    },
    module: {
        rules: [
            { test: /\.jsx?$/, use: 'babel-loader' }
        ]
    }
};