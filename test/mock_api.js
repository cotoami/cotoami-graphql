import request from 'supertest';
import app from '../src/app';

describe('GET /mock/api/session/', () => {
    it('respond with json', (done) => {
        request(app)
        .get('/mock/api/session')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});
