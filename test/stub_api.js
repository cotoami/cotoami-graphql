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
    it('respond with json', (done) => {
        request(app)
        .get('/stub/api/amishis/email/info@tai2.net')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            expect(res.body).to.have.property('email', 'info@tai2.net');
            done();
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

describe('POST /api/cotos', () => {
    it('respond with json', (done) => {
        request(app)
        .post('/stub/api/cotos')
        .send({
            coto: {
                cotonoma_id: 40,
                postId: 1,
                content: 'テスト',
            },
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) done(err);
            expect(res.body).to.have.property('postId', 1);
            expect(res.body).to.have.property('content', 'テスト');
            done();
        });
    });
});
