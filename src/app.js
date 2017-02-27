import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import mock_api from './lib/mock_api';
import accessLog from './lib/access_log';

const app = express();

if (process.env.NODE_ENV !== 'test') {
    app.use(accessLog);
}

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    app.use('/mock/api', mock_api);
}

export default app;
