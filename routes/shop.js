const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../utils/path');

router.get('/shop', (req, res, next) => {
    // join() method works on other OS as well, building a right path
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;