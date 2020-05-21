/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    entry: ['./src/app-prod.js'],
    output: {
        path: path.join(`${__dirname}/../`, 'build'),
        publicPath: 'js/',
        filename: 'app.bundle.js',
    },
});
