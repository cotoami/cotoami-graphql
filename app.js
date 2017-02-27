import express from 'express';
import http from 'http';
import onFinished from 'on-finished';
import bunyan from 'bunyan';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import mock_api from './mock_api';

const logger = bunyan.createLogger({
    name: 'cotoami',
    serializers: bunyan.stdSerializers
});
const app = express();

app.use(accessLog);
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

if (process.env.NODE_ENV === 'development') {
    app.use('/mock/api', mock_api);
}

const server = http.createServer(app);
server.listen(process.env.COTOAMI_GRAPHQL_PORT || 3000);
server.on('error', (err) => logger.error(err));
server.on('listening', () => logger.info({ listening: server.address() }));

function accessLog(req, res, next) {
    onFinished(res, (err, res) => {
        logger.info({ req, res, err });
    });
    next();
}
