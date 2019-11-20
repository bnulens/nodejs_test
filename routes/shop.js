const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../utils/path');
const adminData = require('./admin');

router.get('/shop', (req, res, next) => {
    
    // join() method works on other OS as well, building a right path
    /*   Sending an HTML file as response 
            res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    */
    //  Sending an object as response
    const products = adminData.products; 
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });

});

module.exports = router;