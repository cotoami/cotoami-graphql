import url from 'url';
import fetch from 'node-fetch';

const REST_URL_BASE = 'http://localhost:3000/stub/api/';

function restUrl(path) {
    return url.resolve(REST_URL_BASE, path);
}

class Coto {
    constructor(props) {
        this.id = props.id;
        this.postId = props.postId;
        this.cotonoma_key = props.cotonoma_key;
        this.as_cotonoma = props.as_cotonoma;
        this.content = props.content;
        this.inserted_at = props.inserted_at;
        this.updated_at = props.updated_at;
        this._posted_in = props.posted_in;
    }

    posted_in() {
        if (!this._posted_in) {
            return null;
        }

        return new Cotonoma(this._posted_in);
    }
}

class Cotonoma {
    constructor(props) {
        this.id = props.id;
        this.coto_id = props.coto_id;
        this.postId = props.postId;
        this.key = props.key;
        this.name = props.name;
        this.inserted_at = props.inserted_at;
        this.updated_at = props.updated_at;
    }

    cotos() {
        return fetch(restUrl(`cotonomas/${this.key}/cotos`)).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        })
        .then(({ cotos }) => cotos.map(coto => new Coto(coto)));
    }
}

class Root {
    cotos() {
        return fetch(restUrl('cotos')).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        })
        .then(cotos => cotos.map(coto => new Coto(coto)));
    }

    cotonoma({key}) {
        return fetch(restUrl(`cotonomas/${key}/cotos`)).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        })
        .then((data) => {
            const { cotonoma } = data;
            return new Cotonoma(cotonoma);
        });
    }

    amishi({email}) {
        return fetch(restUrl(`amishis/email/${email}`)).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        });
    }

    session() {
        return fetch(restUrl('session')).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        });
    }

    createCoto({cotonoma_id, postId, content}) {
        const body = {
            coto: {
                cotonoma_id,
                postId,
                content,
            },
        }
        return fetch(restUrl('cotos'), {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        })
        .then(props => new Coto(props));
    }

    // It might be better to return a coto object
    // but now it can't. Because the RESTful API does
    // not have an api that retrieve a coto specified by
    // an ID.
    deleteCoto({id}) {
        return fetch(restUrl(`cotos/${id}`), {
            method: 'DELETE',
        }).then(response => {
            if (response.ok) {
                return true;
            } else {
                throw new Error(response.statusText);
            }
        });
    }

    createCotonoma(args) {
        const body = {
            cotonoma: args,
        }
        return fetch(restUrl('cotonomas'), {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        })
        .then(props => new Cotonoma(props));
    }

    signin({email, save_anonymous}) {
        return fetch(restUrl(`signin/request/${email}/${save_anonymous}`)).then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error(response.statusText);
            }
        });
    }
};

export default Root;
