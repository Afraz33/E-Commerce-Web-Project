const cloudinary = require('cloudinary').v2;
const productRoutes = require("express").Router();
const {isLoggedIn,DecodeUser,CheckIfSeller} = require('../controllers/authController.js');
const {addProduct,deleteProduct,updateProduct,getAllProducts,getProductById,getProductByName,upload} = require('../controllers/productController.js');


//upload image
productRoutes.post('/uploadProduct',addProduct)

//delete product
productRoutes.delete('/deleteProduct/:id',deleteProduct)

//update product
productRoutes.put('/updateProduct/:id', updateProduct)

//get all products
productRoutes.get('/getAllProducts/:sellerId', getAllProducts)

//get product by id
productRoutes.get('/getProductById/:id',DecodeUser,CheckIfSeller, getProductById)

//get product by name
productRoutes.get('/getProductByName/:name',DecodeUser,CheckIfSeller, getProductByName)
module.exports = productRoutes;