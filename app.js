const express = require('express');
const app = express();
const http = require('http');
const bunyan = require('bunyan');
const logger = bunyan.createLogger({
    name: 'cotoami',
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

const server = http.createServer(app);
server.listen(process.env.COTOAMI_GRAPHQL_PORT || 3000);
server.on('error', (error) => logger.error(error));
server.on('listening', () => logger.info({ listening: server.address() }));

