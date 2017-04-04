import url from 'url';
import fetch from 'node-fetch';

export function restUrl(path) {
    return url.resolve(process.env.COTOAMI_REST_API_URL_BASE || 'http://localhost:3000/stub/api/', path);
}

export function getJson({ req, res }, path) {
    return fetch(restUrl(path), {
        headers: { 'Cookie': req.headers.cookie },
    }).then(response => {
        for (const cookie of response.headers.getAll('set-cookie')) {
            res.append('Set-Cookie', cookie);
        }
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    });
}

export function getText({ req, res }, path) {
    return fetch(restUrl(path), {
        headers: { 'Cookie': req.headers.cookie },
    }).then(response => {
        for (const cookie of response.headers.getAll('set-cookie')) {
            res.append('Set-Cookie', cookie);
        }
        if (response.ok) {
            return response.text();
        } else {
            throw new Error(response.statusText);
        }
    });
}

export function postJson({ req, res }, path, body) {
    return fetch(restUrl(path), {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Cookie': req.headers.cookie,
        },
    }).then(response => {
        for (const cookie of response.headers.getAll('set-cookie')) {
            res.append('Set-Cookie', cookie);
        }
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    });
}

export function deleteThenReturnTrue({ req, res }, path) {
    return fetch(restUrl(path), {
        method: 'DELETE',
        headers: { 'Cookie': req.headers.cookie },
    }).then(response => {
        for (const cookie of response.headers.getAll('set-cookie')) {
            res.append('Set-Cookie', cookie);
        }
        if (response.ok) {
            return true;
        } else {
            throw new Error(response.statusText);
        }
    });
}
