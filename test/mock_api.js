import request from 'supertest';
import app from '../src/app';

describe('GET /mock/api/', () => {
    it('respond with json', (done) => {
        request(app)
        .get('/mock/api')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});
