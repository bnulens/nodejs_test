// Path module is necessary to build the right filepath 
const path = require('path');

const express = require('express');
const router = express.Router();

const homeLand = require('../controllers/homepage');

router.get('/', homeLand.homeController);

module.exports = router;
