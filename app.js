// Core Node modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Third party modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Need to set the Templating engine
app.set('view engine', 'ejs');
// 'Views' is the default directory where the Templating Engine looks for files
app.set('views', 'views');

// Imported paths 
const adminRoutes = require('./routes/admin');
const shopData = require('./routes/shop');
const homePath = require('./routes/home');

const errorController = require('./controllers/error');

// Bodies have to be parsed before they land on any path
app.use(bodyParser.urlencoded({extended: false}));

// To serve files statically from the public folder 
app.use(express.static(path.join(__dirname, 'public')));

// Outsourced routes 
// Filtered route to the /admin
app.use('/admin', adminRoutes);
app.use(shopData);
app.use(homePath);
app.use(errorController.get404);


// Custom favicon 
const favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname,'public','favicon.ico')));

/* Ports are being dynamically asigned in production where as we use port 3000 for local developement
    To use another port you have to assign it through an Environmental Variable in the terminal
    WinOS => set PORT= (portnumber);
    Linux/MacOS => export PORT= (portnumber);
*/
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));