const express = require('express');

const path = require('path');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
// Express stores this route and executes it when the request lands on it
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
