const path = require('path');

const express = require('express');
const router = express.Router();

exports.homeController = (req, res, next) => {
    /* join() method works on other OS as well, building a right path
        Returning an HTML file as response
        res.sendFile(path.join(rootDir, 'views', 'home.html'));
    */
    res.render('home', {
        pageTitle: 'Homepage',
        path: '/'
    });
}