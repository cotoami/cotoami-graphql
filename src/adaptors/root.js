import url from 'url';
import fetch from 'node-fetch';

const REST_URL_BASE = 'http://localhost:3000/stub/api/';

function restUrl(path) {
    return url.resolve(REST_URL_BASE, path);
}

class Root {
    cotos() {
        return fetch(restUrl('cotos')).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        });
    }

    cotonoma({key}) {
        return fetch(restUrl(`cotonomas/${key}/cotos`)).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        })
        .then(data => {
            const { cotonoma, cotos } = data;
            return { ...cotonoma, cotos };
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
        return {
            id: 1,
            email: 'foo@example.com',
            display_name: 'bar',
            avatar_url: 'http://example.com/foo.png',
            inserted_at: '2017-02-01 12:58:59',
            updated_at: '2017-02-01 12:58:59',
        }
    }

    createCoto({cotonoma_id, postId, content}) {
        return {
            id: 1,
            postId,
            as_cotonoma: true,
            cotonoma_key: 'abcdefg',
            content,
            inserted_at: '2017-02-01 12:58:59',
            updated_at: '2017-02-01 12:58:59',
            posted_in: null,
        };
    }

    deleteCoto({id}) {
        return {
            id,
            as_cotonoma: true,
            cotonoma_key: 'abcdefg',
            content: 'example cotonoma',
            inserted_at: '2017-02-01 12:58:59',
            updated_at: '2017-02-01 12:58:59',
            posted_in: null,
        };
    }

    createCotonoma({cotoami_id, postId, name}) {
        return {
            id: 2,
            coto_id: -1,
            postId,
            name: 'exmaple cotonoma',
            key,
            inserted_at: '2017-02-01 12:58:59',
            updated_at: '2017-02-01 12:58:59',
            cotos: [],
        };
    }

    signin(email, save_anonymous) {
        return 'ok';
    }
};

export default Root;
