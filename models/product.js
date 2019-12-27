const products = [];
const fs = require('fs');
const path = require('path');

module.exports = class Product {
    //  Works like PHP 
    constructor(title, imageURL, description, price){
        //  Here comes the property
        this.title = title;
        this.imageURL = imageURL;
        this.description = description;
        this.price = price;
    }
    //  Save method - to store the product in the array above 
    save(){
        const p = path.join
        (path.dirname(process.mainModule.filename), 
        'data',
        'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            } 
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }
    /* 
    1)  Fetch method - to request all present products from 
        the 'products' array without making another product while requesting the fetch.
    2)  'Static' to call the method directly on the class itself and not the object 
    3)  To read the JSON from the generated data/products.json file it needs to be parsed 
        into an array again so JS can work with it.
    4)  Accepting an argument 'cB' (callback) makes fetchAll execute cB that holds the data
        you want to return
    */ 
    static fetchAll(cB){
        const p = path.join
        (path.dirname(process.mainModule.filename), 
        'data',
        'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cB([]);
            }
            cB(JSON.parse(fileContent));
        });
    }
}