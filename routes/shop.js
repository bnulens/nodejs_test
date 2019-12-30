const path = require('path');

const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');

router.use('/shop', shopController.getProducts);

router.get('/products', shopController.getProducts);

/* Dynamic parameters
    -> product id is dynamically passed in as parameter
    -> specific routes are to be put first 
*/
router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);

router.get('/orders', shopController.getOrders);



module.exports = router;