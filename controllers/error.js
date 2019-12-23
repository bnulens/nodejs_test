exports.get404 = (req, res, next) => {
    /* Sending an HTML as a response, from a generated path 
        res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    */
    // Sending a response via EJS 
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
};
