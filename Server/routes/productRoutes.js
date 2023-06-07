const cloudinary = require('cloudinary').v2;
const productRoutes = require("express").Router();
const {isLoggedIn,DecodeUser,CheckIfSeller} = require('../controllers/authController.js');
const {addProduct,deleteProduct,updateProduct,getAllProducts,getProductById,getProductByName} = require('../controllers/productController.js');


//upload image
productRoutes.post('/uploadProduct',DecodeUser,CheckIfSeller, addProduct)

//delete product
productRoutes.delete('/deleteProduct/:id',DecodeUser,CheckIfSeller, deleteProduct)

//update product
productRoutes.put('/updateProduct/:id',DecodeUser,CheckIfSeller, updateProduct)

//get all products
productRoutes.get('/getAllProducts/:sellerId',DecodeUser,CheckIfSeller, getAllProducts)

//get product by id
productRoutes.get('/getProductById/:id',DecodeUser,CheckIfSeller, getProductById)

//get product by name
productRoutes.get('/getProductByName/:name',DecodeUser,CheckIfSeller, getProductByName)
module.exports = productRoutes;