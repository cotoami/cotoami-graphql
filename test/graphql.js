import expect from 'expect.js';
import { graphql } from 'graphql';
import schema from '../src/schema';
import Root from '../src/adaptors/root';

describe('Get cotos', () => {
    it('respond with json', () => {
        const query = `query {
            cotos {
              id
            }
        }`;
        return graphql(schema, query, new Root()).then((result) => {
            expect(result).not.to.have.key('errors');
            expect(result.data).to.have.property('cotos');
            expect(result.data.cotos).to.be.an('array');
            expect(result.data.cotos).to.not.be.empty();
            expect(result.data.cotos[0]).to.have.property('id');
        });
    });
});

describe('Get a cotonoma and cotos of it', () => {
    it('respond with json', () => {
        const query = `query {
            cotonoma(key: "abcde") {
              key
              cotos {
                id
              }
            }
        }`;
        return graphql(schema, query, new Root()).then((result) => {
            expect(result).not.to.have.key('errors');
            expect(result.data).to.have.property('cotonoma');
            expect(result.data.cotonoma).not.to.be(null);
            expect(result.data.cotonoma).to.have.property('key', 'abcde');
            expect(result.data.cotonoma).to.have.property('cotos');
            expect(result.data.cotonoma.cotos).to.be.an('array');
        });
    });
});

describe('Get an amishi', () => {
    it('respond with json', () => {
        const query = `query {
            amishi(email: "test@example.com") {
              id
            }
        }`;
        return graphql(schema, query, new Root()).then((result) => {
            expect(result).not.to.have.key('errors');
            expect(result.data).to.have.property('amishi');
            expect(result.data.amishi).not.to.be(null);
            expect(result.data.amishi).to.have.property('id');
        });
    });
});

describe('Get a session', () => {
    it('respond with json', () => {
        const query = `query {
            session {
                id
            }
        }`;
        return graphql(schema, query, new Root()).then((result) => {
            expect(result).not.to.have.key('errors');
            expect(result.data).to.have.property('session');
            expect(result.data.session).not.to.be(null);
            expect(result.data.session).to.have.property('id');
        });
    });
});
