const helloWorldApi = require('./helloWorld');

function api(server) {
    server.use('/api/v1/hello-world', helloWorldApi);
}

module.exports = api;
