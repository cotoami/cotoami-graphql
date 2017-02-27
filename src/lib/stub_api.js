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
        },
    ]);
});

router.post('/cotos', (req, res) => {
    const {postId, content} = req.body.coto;
    res.json({
        postId,
        updated_at: '2017-02-26 06:35:37',
        posted_in: null,
        inserted_at: '2017-02-26 06:35:37',
        id: 560,
        cotonoma_key: '',
        content,
        as_cotonoma: false,
    });
});

router.delete('/cotos/:id', (req, res) => {
    res.end();
});

export default router;
