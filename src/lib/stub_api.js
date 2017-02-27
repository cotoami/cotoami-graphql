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

export default router;
