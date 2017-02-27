import http from 'http';
import logger from './lib/logger';
import app from './app';

const server = http.createServer(app);
server.listen(process.env.COTOAMI_GRAPHQL_PORT || 3000);
server.on('error', (err) => logger.error(err));
server.on('listening', () => logger.info({ listening: server.address() }));

