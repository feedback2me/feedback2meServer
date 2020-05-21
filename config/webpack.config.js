const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
    const SERVER_PATH =
        argv.mode === 'production' ? './src/app-prod.js' : './src/app-dev.js';

    return {
        mode: 'development',
        entry: [SERVER_PATH],
        output: {
            path: path.join(`${__dirname}/../`, 'build'),
            publicPath: 'js/',
            filename: 'app.bundle.js',
        },
        target: 'node',
        node: {
            __dirname: false,
            __filename: false,
        },
        externals: [nodeExternals()],
        module: {
            rules: [
                {
                    // Transpiles ES6-8 into ES5
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
            ],
        },
        plugins: [],
    };
};
