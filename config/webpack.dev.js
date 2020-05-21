/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
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
    externals: [nodeExternals()],
    plugins: [new webpack.HotModuleReplacementPlugin()],
});
