import url from 'url';

export default function restUrl(path) {
    return url.resolve(process.env.COTOAMI_REST_API_URL_BASE || 'http://localhost:3000/stub/api/', path);
}

