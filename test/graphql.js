import expect from 'expect.js';
import fetch from 'node-fetch';

function postQuery(query, variables) {
    return fetch('http://localhost:3000/graphql', {
        method: 'POST',
        body: JSON.stringify({ query, variables }),
        headers: { 'Content-Type': 'application/json' },
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    });
}

describe('Get cotos', () => {
    it('respond with json', () => {
        const query = `query {
            cotos {
              id
            }
        }`;
        return postQuery(query).then((result) => {
            expect(result).not.to.have.key('errors');
            expect(result.data).to.have.property('cotos');
            expect(result.data.cotos).to.be.an('array');
            expect(result.data.cotos).to.not.be.empty();
            expect(result.data.cotos[0]).to.have.property('id');
        });
    });

    it('can contain amishi', () => {
        const query = `query {
            cotos {
                amishi {
                    id
                }
            }
        }`;
        return postQuery(query).then((result) => {
            expect(result).not.to.have.key('errors');
            expect(result.data).to.have.property('cotos');
            expect(result.data.cotos).to.be.an('array');
            expect(result.data.cotos).to.not.be.empty();
            expect(result.data.cotos[0]).to.have.property('amishi');
            expect(result.data.cotos[0].amishi).to.have.property('id');
        });
    });

    it('responds cotos and cotonomas recursively', () => {
        const query = `query {
            cotos {
                posted_in {
                    cotos {
                        id
                    }
                }
            }
        }`;
        return postQuery(query).then((result) => {
            expect(result).not.to.have.key('errors');
            expect(result.data).to.have.property('cotos');
            expect(result.data.cotos[0]).to.have.property('posted_in');
            expect(result.data.cotos[0].posted_in).to.have.property('cotos');
            expect(result.data.cotos[0].posted_in.cotos[0]).to.have.property('id');
        });
    });
});

describe('Get cotonomas', () => {
    it('respond with json', () => {
        const query = `query {
            cotonomas {
              id
            }
        }`;
        return postQuery(query).then((result) => {
            expect(result).not.to.have.key('errors');
            expect(result.data).to.have.property('cotonomas');
            expect(result.data.cotonomas).to.be.an('array');
            expect(result.data.cotonomas).to.not.be.empty();
            expect(result.data.cotonomas[0]).to.have.property('id');
        });
    });
});

describe('Get a cotonoma with cotonoma_id', () => {
    it('respond with single element array', () => {
        const query = `query {
            cotonomas(cotonoma_id: 28) {
              id
            }
        }`;
        return postQuery(query).then((result) => {
            expect(result).not.to.have.key('errors');
            expect(result.data).to.have.property('cotonomas');
            expect(result.data.cotonomas).to.be.an('array');
            expect(result.data.cotonomas).to.have.length(1);
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
        return postQuery(query).then((result) => {
            expect(result).not.to.have.key('errors');
            expect(result.data).to.have.property('cotonoma');
            expect(result.data.cotonoma).not.to.be(null);
            expect(result.data.cotonoma).to.have.property('key', 'abcde');
            expect(result.data.cotonoma).to.have.property('cotos');
            expect(result.data.cotonoma.cotos).to.be.an('array');
        });
    });
});

describe('Get cotonoma\'s owner', () => {
    it('respond with json', () => {
        const query = `query {
            cotonoma(key: "abcde") {
              owner {
                id
              }
            }
        }`;
        return postQuery(query).then((result) => {
            expect(result).not.to.have.key('errors');
            expect(result.data).to.have.property('cotonoma');
            expect(result.data.cotonoma).not.to.be(null);
            expect(result.data.cotonoma).to.have.property('owner');
            expect(result.data.cotonoma.owner).to.have.property('id');
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
        return postQuery(query).then((result) => {
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
        return postQuery(query).then((result) => {
            expect(result).not.to.have.key('errors');
            expect(result.data).to.have.property('session');
            expect(result.data.session).not.to.be(null);
            expect(result.data.session).to.have.property('id');
        });
    });
});

describe('Create a coto', () => {
    it('respond with json', () => {
        const query = `mutation {
            createCoto(cotonoma_id: 1, postId: 1, content: "test") {
                id
                postId
                content
            }
        }`;
        return postQuery(query).then((result) => {
            expect(result).not.to.have.key('errors');
            expect(result.data).to.have.property('createCoto');
            expect(result.data.createCoto).not.to.be(null);
            expect(result.data.createCoto).to.have.property('id');
            expect(result.data.createCoto).to.have.property('postId', 1);
            expect(result.data.createCoto).to.have.property('content', 'test');
        });
    });
});

describe('Delete a coto', () => {
    it('respond with succeeded', () => {
        const query = `mutation {
            deleteCoto(id: 1)
        }`;
        return postQuery(query).then((result) => {
            expect(result).not.to.have.key('errors');
            expect(result.data).to.have.property('deleteCoto', true);
        });
    });
});

describe('Create a cotonoma', () => {
    it('respond with json', () => {
        const query = `mutation {
            createCotonoma(cotonoma_id: 1, postId: 1, name: "test", members: []) {
                id
            }
        }`;
        return postQuery(query).then((result) => {
            expect(result).not.to.have.key('errors');
            expect(result.data).to.have.property('createCotonoma');
            expect(result.data.createCotonoma).not.to.be(null);
            expect(result.data.createCotonoma).to.have.property('id');
        });
    });
});

describe('signin', () => {
    it('respond with succeeded', () => {
        const query = `mutation {
            signin(email: "test@example.com", save_anonymous: true)
        }`;
        return postQuery(query).then((result) => {
            expect(result).not.to.have.key('errors');
            expect(result.data).to.have.property('signin', 'ok');
        });
    });
});
