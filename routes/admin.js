const express = require('express');

const rootDir = require('../utils/path');

const path = require('path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
