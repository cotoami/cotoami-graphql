import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import Root from './adaptors/root';
import stub_api from './lib/stub_api';
import accessLog from './lib/access_log';

const app = express();

if (process.env.NODE_ENV !== 'test') {
    app.use(accessLog);
}

app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: new Root(),
    graphiql: true,
}));

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    app.use('/stub/api', stub_api);
}

export default app;
