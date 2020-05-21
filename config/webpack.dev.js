/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client?reload=true&timeout=1000',
        './src/app-dev.js',
    ],
    output: {
        publicPath: 'js/',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
});
