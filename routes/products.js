const express = require('express');
const router = express.Router();
const products = require('../db/products')
let prodID = 0;

router.get('/', (req,res) => {
    console.log(products.getAllProducts())
    res.render('index', products.getAllProducts())
});


router.post('/', (req,res) => {
    // console.log(req.body)
    let newProdObj = {};
    if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('price') && req.body.hasOwnProperty('inventory')){
        newProdObj.id = prodID;
        newProdObj.name = req.body.name;
        newProdObj.price = req.body.price;
        newProdObj.inventory = req.body.inventory
        console.log(newProdObj);
        products.addProduct(newProdObj)
        prodID++;
    }
    res.redirect('/products');
})



module.exports = router