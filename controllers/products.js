const products = [];
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/shop');
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    
    // join() method works on other OS as well, building a right path
    /*   Sending an HTML file as response 
            res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    */
    //  Sending an object as response
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/shop',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
}