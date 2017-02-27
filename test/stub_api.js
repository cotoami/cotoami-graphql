import request from 'supertest';
import app from '../src/app';

describe('GET /stub/api/session/', () => {
    it('respond with json', (done) => {
        request(app)
        .get('/stub/api/session')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});
