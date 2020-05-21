import 'core-js/stable';
import 'regenerator-runtime/runtime';

import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import path from 'path';

import api from './api';
import logger from './logger';

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
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

// const URL_MAP = {
//     '/login': '/public/login',
// };

// app.get('*', (req, res) => {
//     const url = URL_MAP[req.path];
//     if (url) {
//         app.render(req, res, url);
//     } else {
//         handle(req, res);
//     }
// });

// app.get("/static/*", (req, res) => {
//   handle(req, res);
// });
