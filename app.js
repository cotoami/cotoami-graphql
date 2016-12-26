import express from 'express';
import http from 'http';
import bunyan from 'bunyan';

const logger = bunyan.createLogger({
    name: 'cotoami',
});
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

const server = http.createServer(app);
server.listen(process.env.COTOAMI_GRAPHQL_PORT || 3000);
server.on('error', (error) => logger.error(error));
server.on('listening', () => logger.info({ listening: server.address() }));

