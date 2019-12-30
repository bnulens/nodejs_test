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

// GET Product 
exports.getProduct = (req, res, next) => {
    // Parameter is dynamic from the route using the name 'productId' 
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        console.log(product);
    })
    res.redirect('/products/');
}

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

exports.getOrders =  (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your Orders',
        path: '/orders'
    });
};