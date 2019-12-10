const products = [];

module.exports = class Product {
    // Works like PHP 
    constructor(t){
        // Here comes the property
        this.title = t;
    }
    // Save method - to store the product in the array above 
    save(){
        products.push(this)
    }
    /* Fetch method - to request all present products from 
    the array above without making another product while requesting the fetch.
    Static to call the method directly on the class itself and not the object */ 
    static fetchAll(){
        return products;
    }
}