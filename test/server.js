import http from 'http';
import app from '../src/app';

const server = http.createServer(app);

before(() => {
    server.listen(3000);
});

after(() => {
    server.close();
});

