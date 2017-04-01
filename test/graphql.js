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
