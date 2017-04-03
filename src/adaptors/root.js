import fetch from 'node-fetch';
import restUrl from './rest_url';
import Coto from './coto';
import Cotonoma from './cotonoma';

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
