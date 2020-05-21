import 'core-js/stable';
import 'regenerator-runtime/runtime';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from 'webpack';
// eslint-disable-next-line import/no-extraneous-dependencies
import webpackDevMiddleware from 'webpack-dev-middleware';
// eslint-disable-next-line import/no-extraneous-dependencies
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfigJs from '../config/webpack.config';

import api from './api';
import logger from './logger';

const app = express();

const config = webpackConfigJs({}, { mode: 'production' });
config.entry.unshift('webpack-hot-middleware/client?reload=true&timeout=1000');

// Add HMR plugin
config.plugins.push(new webpack.HotModuleReplacementPlugin());

const compiler = webpack(config);

// Enable "webpack-dev-middleware"
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    }),
);

// Enable "webpack-hot-middleware"
app.use(webpackHotMiddleware(compiler));

// investigate this
app.use(express.static('./public'));

app.use(helmet());
app.use(compression());
app.use(express.json());

api(app);

app.get('/', (req, res) => res.send('Home page!'));

const port = process.env.PORT || 8080;
const ROOT_URL = `http://localhost:${port}`;

app.listen(port, (err) => {
    if (err) throw err;
    logger.info(`> Ready on ${ROOT_URL}`);
});
