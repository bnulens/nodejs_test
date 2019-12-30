const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data',
    'products.json'
);

const getProductsFromFile = cB => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cB([]);
        } else {
            cB(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    //  Works like PHP 
    constructor(title, imageURL, description, price){
        //  Here come the properties
        this.title = title;
        this.imageURL = imageURL;
        this.description = description;
        this.price = price;
    }
    //  Save method - to store the product in the array above 
    save(){
        this.id = Math.random().toString();
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
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
        getProductsFromFile(cB);
    }

    static findById(id, cB) {
        getProductsFromFile(products => {
            // implicit return statement
           
            const product = products.find(p => p.id === id);
            // execute synchronous callback function
            cB(product);
        });
    }
};