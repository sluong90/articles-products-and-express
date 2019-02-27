let listOfProducts = [];

function getAllProducts(){
    return listOfProducts;
}

function addProduct(obj){
    listOfProducts.push(obj);
}

function getProdById(id){
    for(let i =0; i<listOfProducts.length; i++){
        if(listOfProducts[i].id === id){
            return listOfProducts[i];
        }
    }
}

module.exports = {
    getAllProducts: getAllProducts,
    addProduct: addProduct,
    getProdById: getProdById
}