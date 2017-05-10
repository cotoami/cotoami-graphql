import request from 'supertest';
import expect from 'expect.js';
import app from '../src/app';

describe('GET /stub/api/session/', () => {
    it('respond with json', () => {
        request(app)
        .get('/stub/api/session')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
            expect(res.body).to.have.property('id');
            expect(res.body).to.have.property('email');
            expect(res.body).to.have.property('display_name');
            expect(res.body).to.have.property('avatar_url');
            expect(res.body).to.have.property('websocket_url');
            expect(res.body).to.have.property('token');
            expect(res.body).to.have.property('inserted_at');
            expect(res.body).to.have.property('updated_at');
        });
    });
});

describe('GET /stub/api/amishis/email/:email', () => {
    it('respond with json', () => {
        return request(app)
        .get('/stub/api/amishis/email/info@tai2.net')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
            expect(res.body).to.have.property('id');
            expect(res.body).to.have.property('email');
            expect(res.body).to.have.property('display_name');
            expect(res.body).to.have.property('avatar_url');
            expect(res.body).to.have.property('inserted_at');
            expect(res.body).to.have.property('updated_at');
        });
    });
});

describe('GET /stub/api/cotos', () => {
    it('respond with json', () => {
        request(app)
        .get('/stub/api/cotos')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
            expect(res.body).to.be.an('array');
            expect(res.body).not.to.be.empty();
            expect(res.body[0]).to.have.property('id');
            expect(res.body[0]).to.have.property('cotonoma_key');
            expect(res.body[0]).to.have.property('content');
            expect(res.body[0]).to.have.property('posted_in');
            expect(res.body[0]).to.have.property('as_cotonoma');
            expect(res.body[0]).to.have.property('amishi');
            expect(res.body[0]).to.have.property('inserted_at');
            expect(res.body[0]).to.have.property('updated_at');
        });
    });
});

describe('POST /stub/api/cotos', () => {
    it('respond with json', () => {
        return request(app)
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
        .then(res => {
            expect(res.body).to.have.property('postId', 1);
            expect(res.body).to.have.property('content', 'テスト');
            expect(res.body).to.have.property('id');
            expect(res.body).to.have.property('cotonoma_key');
            expect(res.body).to.have.property('posted_in');
            expect(res.body).to.have.property('as_cotonoma');
            expect(res.body).to.have.property('amishi');
            expect(res.body).to.have.property('inserted_at');
            expect(res.body).to.have.property('updated_at');
        });
    });
});

describe('DELETE /stub/api/cotos/:id', () => {
    it('respond with 200', (done) => {
        request(app)
        .delete('/stub/api/cotos/1')
        .expect('Content-Type', /text/)
        .expect(200, '', done);
    });
});

describe('GET /stub/api/cotonomas', () => {
    it('respond with json', () => {
        request(app)
        .get('/stub/api/cotonomas')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
            expect(res.body).to.be.an('array');
            expect(res.body).not.to.be.empty();
            expect(res.body[0]).to.have.property('id');
            expect(res.body[0]).to.have.property('coto_id');
            expect(res.body[0]).to.have.property('name');
            expect(res.body[0]).to.have.property('key');
            expect(res.body[0]).to.have.property('owner');
            expect(res.body[0]).to.have.property('inserted_at');
            expect(res.body[0]).to.have.property('updated_at');
        });
    });
});

describe('POST /stub/api/cotonomas', () => {
    it('respond with json', () => {
        return request(app)
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
        .then(res => {
            expect(res.body).to.have.property('postId', 1);
            expect(res.body).to.have.property('content', 'テスト');
            expect(res.body).to.have.property('as_cotonoma', true);
            expect(res.body).to.have.property('id');
            expect(res.body).to.have.property('cotonoma_key');
            expect(res.body).to.have.property('posted_in');
            expect(res.body).to.have.property('amishi');
            expect(res.body).to.have.property('inserted_at');
            expect(res.body).to.have.property('updated_at');
        });
    });
});

describe('GET /stub/api/cotonomas/:key/cotos', () => {
    it('respond with json', () => {
        request(app)
        .get('/stub/api/cotonomas/tp2re1drdj106s8d/cotos')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
            expect(res.body).to.have.property('cotos');
            expect(res.body).to.have.property('cotonoma');
            expect(res.body).to.have.property('members');
            expect(res.body.cotonoma).to.have.property('key', 'tp2re1drdj106s8d');
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
