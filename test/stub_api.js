import request from 'supertest';
import expect from 'expect.js';
import app from '../src/app';
import assert from 'assert';

describe('GET /stub/api/session/', () => {
    it('respond with json', (done) => {
        request(app)
        .get('/stub/api/session')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('GET /stub/api/amishis/email/:email', () => {
    it('respond with json', () => {
        request(app)
        .get('/stub/api/amishis/email/info@tai2.net')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
            expect(res.body).to.have.property('email', 'info@tai2.net');
        });
    });
});

describe('GET /stub/api/cotos', () => {
    it('respond with json', (done) => {
        request(app)
        .get('/stub/api/cotos')
        .expect('Content-Type', /json/)
        .expect(200, done)
    });
});
