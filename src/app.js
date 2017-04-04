import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import Root from './adaptors/root';
import stubApi from './lib/stub_api';
import accessLog from './lib/access_log';

const app = express();

if (process.env.NODE_ENV !== 'test') {
    app.use(accessLog);
}

app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP((req, res) => ({
    schema,
    rootValue: new Root(),
    context: { req, res },
    graphiql: true,
})));

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    app.use((req, res, next) => {
        res.cookie('foo1', 'bar1');
        res.cookie('foo2', 'bar2');
        next();
    });
    app.use('/stub/api', stubApi);
}

export default app;
