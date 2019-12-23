const products = [];
const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/shop'
        });
    });
}; 

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Basket',
        path: '/cart'
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout'
    });
};