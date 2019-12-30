const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageURL = req.body.imageURL;
    const description = req.body.description;
    const price = req.body.price;

    const product = new Product(title, imageURL, description, price);
    product.save();
    res.redirect('/shop');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('/admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        });
    });
}

