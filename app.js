// Core Node modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Third party modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminPath = require('./routes/admin');
const shopPath = require('./routes/shop');

// Bodies have to be parsed before they land on any path
app.use(bodyParser.urlencoded({extended: false}));

// Outsourced routes 
// Filtered route to the /admin
app.use('/admin', adminPath);
app.use(shopPath);

// Adding a catch all middleware redirecting to a 404-page
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});

app.listen(3000);