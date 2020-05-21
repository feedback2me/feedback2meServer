import helloWorldApi from './helloWorld';

function api(server) {
    server.use('/api/v1/hello-world', helloWorldApi);
}

export default api;
