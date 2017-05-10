const express = require('express');
const router = express.Router();

router.get('/session', (req, res) => {
    res.json({
        updated_at: '2016-12-25 08:34:05',
        inserted_at: '2016-12-25 08:34:05',
        id: 7,
        email: 'info@tai2.net',
        display_name: 'tai2',
        avatar_url: 'https://secure.gravatar.com/avatar/b7f799d31a76215358b8364a2654c245',
        websocket_url: 'wss://cotoa.me/socket/websocket',
        token: 'SFMyNTY.g3QAAAACZAAEZGF0YWEHZAAGc2lnbmVkbgYARq_x5lsB.63O1BnELg7SDx32j1vw25meKzEjKowJhuwFRz27rbBM',
    });
});

router.get('/amishis/email/:email', (req, res) => {
    res.json({
        updated_at: '2016-12-25 08:34:05',
        inserted_at: '2016-12-25 08:34:05',
        id: 7,
        email: req.params.email,
        display_name: 'tai2',
        avatar_url: 'https://secure.gravatar.com/avatar/b7f799d31a76215358b8364a2654c245',
    });
});

router.get('/cotos', (req, res) => {
    res.json([
        {
            updated_at: '2017-02-01 14:38:32',
            posted_in: {
                updated_at: '2017-02-01 12:58:59',
                name: 'テスト',
                key: 'qcqshmvikch68tkh',
                inserted_at: '2017-02-01 12:58:59',
                id: 39,
                coto_id: -1,
            },
            inserted_at: '2017-02-01 14:38:32',
            id: 280,
            cotonoma_key: 'mnmdm93100om4v9j',
            content: 'aaaaa',
            as_cotonoma: true,
            amishi: {
                avatar_url: '',
                display_name: '',
                email: 'info@tai2.net',
                id: 7,
                inserted_at: '2017-02-01 12:58:59',
                updated_at: '2017-02-01 12:58:59',
            },
        },
        {
            updated_at: '2017-02-01 12:58:59',
            posted_in: {
                updated_at: '2017-02-01 12:19:01',
                name: '間3',
                key: 'esll1ureuculekv3',
                inserted_at: '2017-02-01 12:19:01',
                id: 38,
                coto_id: -1,
            },
            inserted_at: '2017-02-01 12:58:59',
            id: 279,
            cotonoma_key: 'qcqshmvikch68tkh',
            content: 'テスト',
            as_cotonoma: true,
            amishi: {
                avatar_url: '',
                display_name: '',
                email: 'info@tai2.net',
                id: 7,
                inserted_at: '2017-02-01 12:58:59',
                updated_at: '2017-02-01 12:58:59',
            },
        },
    ]);
});

router.post('/cotos', (req, res) => {
    const {postId, content} = req.body.coto;
    res.json({
        postId,
        updated_at: '2017-02-26 06:35:37',
        posted_in: {
            updated_at: '2017-02-01 12:19:01',
            name: '間3',
            key: 'esll1ureuculekv3',
            inserted_at: '2017-02-01 12:19:01',
            id: 38,
            coto_id: -1,
        },
        inserted_at: '2017-02-26 06:35:37',
        id: 560,
        cotonoma_key: '',
        content,
        as_cotonoma: false,
        amishi: null,
    });
});

router.delete('/cotos/:id', (req, res) => {
    res.type('text');
    res.end();
});

router.get('/cotonomas', (req, res) => {
    res.json([
        {
            updated_at:"2017-01-31 11:09:48",
            name:"間",
            key:"mt9u3qlda0r9joif",
            inserted_at:"2017-01-31 11:09:48",
            id: 28,
            coto_id: 253,
            owner: {
                avatar_url: 'https://secure.gravatar.com/avatar/b7f799d31a76215358b8364a2654c245',
                display_name: 'tai2',
                email: 'info@tai2.net',
                id: 7,
                inserted_at:"2017-01-31 11:09:48",
                updated_at:"2017-01-31 11:09:48",
            },
        },
        {
            updated_at: '2017-01-31 12:05:52',
            name: '間2',
            key: '9tprql4a4ic8cscc',
            inserted_at: '2017-01-31 12:05:52',
            id: 29,
            coto_id: 255,
            owner: {
                avatar_url: 'https://secure.gravatar.com/avatar/b7f799d31a76215358b8364a2654c245',
                display_name: 'tai2',
                email: 'info@tai2.net',
                id: 7,
                inserted_at:"2017-01-31 11:09:48",
                updated_at:"2017-01-31 11:09:48",
            },
        },
    ]);
});

router.post('/cotonomas', (req, res) => {
    const {postId, name} = req.body.cotonoma;
    res.json({
        postId,
        updated_at: '2017-02-26 06:51:09',
        posted_in: null,
        inserted_at: '2017-02-26 06:51:09',
        id: 567,
        cotonoma_key: 'tp2re1drdj106s8d',
        content: name,
        as_cotonoma: true,
        amishi: {
            avatar_url: 'https://secure.gravatar.com/avatar/b7f799d31a76215358b8364a2654c245',
            display_name: 'tai2',
            email: 'info@tai2.net',
            id: 7,
            inserted_at:"2017-01-31 11:09:48",
            updated_at:"2017-01-31 11:09:48",
        },
    });
});

router.get('/cotonomas/:key/cotos', (req, res) => {
    const cotonomaKey = req.params.key;
    res.json({
        cotos:[
            {
                updated_at: '2017-02-01 12:58:59',
                posted_in: {
                    updated_at: '2017-02-01 12:19:01',
                    name: '間3',
                    key: 'esll1ureuculekv3',
                    inserted_at: '2017-02-01 12:19:01',
                    id: 38,
                    coto_id: -1
                },
                inserted_at: '2017-02-01 12:58:59',
                id: 279,
                cotonoma_key: 'qcqshmvikch68tkh',
                content: 'テスト',
                as_cotonoma: true,
                amishi: {
                    avatar_url: 'https://secure.gravatar.com/avatar/b7f799d31a76215358b8364a2654c245',
                    display_name: 'tai2',
                    email: 'info@tai2.net',
                    id: 7,
                    inserted_at:"2017-01-31 11:09:48",
                    updated_at:"2017-01-31 11:09:48",
                },
            },
            {
                updated_at: '2017-02-01 12:19:12',
                posted_in: {
                    updated_at: '2017-02-01 12:19:01',
                    name: '間3',
                    key: cotonomaKey,
                    inserted_at: '2017-02-01 12:19:01',
                    id: 38,
                    coto_id: -1
                },
                inserted_at: '2017-02-01 12:19:12',
                id: 278,
                cotonoma_key: '',
                content: '投稿',
                as_cotonoma: false,
                amishi: {
                    avatar_url: 'https://secure.gravatar.com/avatar/b7f799d31a76215358b8364a2654c245',
                    display_name: 'tai2',
                    email: 'info@tai2.net',
                    id: 7,
                    inserted_at:"2017-01-31 11:09:48",
                    updated_at:"2017-01-31 11:09:48",
                },
            }
        ],
        cotonoma: {
            updated_at: '2017-02-01 12:19:01',
            name: '間3',
            key: cotonomaKey,
            inserted_at: '2017-02-01 12:19:01',
            id: 38,
            coto_id: 277,
            owner: {
                avatar_url: 'https://secure.gravatar.com/avatar/b7f799d31a76215358b8364a2654c245',
                display_name: 'tai2',
                email: 'info@tai2.net',
                id: 7,
                inserted_at:"2017-01-31 11:09:48",
                updated_at:"2017-01-31 11:09:48",
            },
        },
        members: [
            {
                avatar_url: 'https://secure.gravatar.com/avatar/b7f799d31a76215358b8364a2654c245',
                display_name: 'tai2',
                email: 'info@tai2.net',
                id: 7,
                inserted_at:"2017-01-31 11:09:48",
                updated_at:"2017-01-31 11:09:48",
            }
        ],
    });
});

router.get('/signin/request/:email/:save_anonymous', (req, res) => {
    res.send('ok');
});

export default router;
