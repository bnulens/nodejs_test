// Path module is necessary to build the right filepath 
const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../utils/path');

router.get('/', (req, res, next) => {
    /* join() method works on other OS as well, building a right path
    Returning an HTML file as response
     res.sendFile(path.join(rootDir, 'views', 'home.html'));
    */
    res.render('home', {
        pageTitle: 'Homepage',
        path: '/'
    });
});

module.exports = router;
