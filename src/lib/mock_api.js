const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({a: 1, b: 2});
});

export default router;
