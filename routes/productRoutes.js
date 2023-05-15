const cloudinary = require('cloudinary').v2;
const productRoutes = require("express").Router();
const {isLoggedIn} = require('../controllers/authController.js');
const {addProduct,deleteProduct,updateProduct,getAllProducts,getProductById,getProductByName} = require('../controllers/productController.js');


//upload image
productRoutes.post('/uploadImage', isLoggedIn, addProduct)

//delete product
productRoutes.delete('/deleteProduct/:id',isLoggedIn, deleteProduct)

//update product
productRoutes.put('/updateProduct/:id', isLoggedIn, updateProduct)

//get all products
productRoutes.get('/getAllProducts/:sellerId',isLoggedIn, getAllProducts)

//get product by id
productRoutes.get('/getProductById/:id',isLoggedIn, getProductById)

//get product by name
productRoutes.get('/getProductByName/:name', getProductByName)
module.exports = productRoutes;