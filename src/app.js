const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

const api = require('./api');

const logger = require('./logger');

const port = process.env.PORT || 8000;
const ROOT_URL = `http://localhost:${port}`;

// const URL_MAP = {
//     '/login': '/public/login',
// };

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());

api(app);

app.get('/', (req, res) => res.send('Home page!'));

app.listen(port, (err) => {
    if (err) throw err;
    logger.info(`> Ready on ${ROOT_URL}`);
});

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
