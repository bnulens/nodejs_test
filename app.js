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
const adminData = require('./routes/admin');
const shopData = require('./routes/shop');
const homePath = require('./routes/home');

// Bodies have to be parsed before they land on any path
app.use(bodyParser.urlencoded({extended: false}));

// To serve files statically from the public folder 
app.use(express.static(path.join(__dirname, 'public')));

// Outsourced routes 
// Filtered route to the /admin
app.use('/admin', adminData.routes);
app.use(shopData);
app.use(homePath);

// Adding a 'catch all' middleware redirecting to a 404-page
app.use((req, res, next) => {
    /* Sending an HTML as a response, from a generated path 
        res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    */
    // Sending a response via EJS 
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

/* Ports are being dynamically asigned in production where as we use port 3000 for local developement
    To use another port you have to assign it through an Environmental Variable in the terminal
    WinOS => set PORT= (portnumber);
    Linux/MacOS => export PORT= (portnumber);
*/
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));