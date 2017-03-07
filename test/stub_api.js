import request from 'supertest';
import expect from 'expect.js';
import app from '../src/app';

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

describe('POST /stub/api/cotos', () => {
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

describe('DELETE /stub/api/cotos/:id', () => {
    it('respond with 200', (done) => {
        request(app)
        .delete('/stub/api/cotos/1')
        .expect(200, done);
    });
});

describe('GET /stub/api/cotonomas', () => {
    it('respond with json', (done) => {
        request(app)
        .get('/stub/api/cotonomas')
        .expect('Content-Type', /json/)
        .expect(200, done)
    });
});

describe('POST /stub/api/cotonomas', () => {
    it('respond with json', (done) => {
        request(app)
        .post('/stub/api/cotonomas')
        .send({
            cotonoma: {
                cotonoma_id: null,
                postId: 1,
                name: 'テスト',
                members: [
                    { 'email': 'work@tai2.net' },
                ],
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

describe('GET /stub/api/cotonomas/:id/cotos', () => {
    it('respond with json', (done) => {
        request(app)
        .get('/stub/api/cotonomas/1/cotos')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) done(err);
            expect(res.body).to.have.property('cotonoma');
            expect(res.body.cotonoma).to.have.property('id', 1);
            done();
        });
    });
});

describe('GET /stub/api/signin/request/:email/:save_anonymous', () => {
    it('respond with json', (done) => {
        request(app)
        .get('/stub/api/signin/request/info@tai2.net/yes')
        .expect(200, 'ok', done);
    });
});
