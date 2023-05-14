const {signup, login, getSeller, updateSeller, deleteSeller, DecodeUser, CheckIfSeller, getAllSellers } = require('../controllers/sellerController');
const sellerRoutes = require("express").Router();
const {isLoggedIn} = require('../controllers/authController.js');
//Signup Route
sellerRoutes.post('/seller-signup', signup);

//Login Route
sellerRoutes.post('/seller-login', login);

//Get Seller Route
sellerRoutes.get('/getSeller/:sellerId',DecodeUser,CheckIfSeller, getSeller);

//Update Seller Route
sellerRoutes.get('/updateSeller/:sellerId',isLoggedIn, getAllSellers);

//Delete Seller Route
sellerRoutes.delete('/delete-account/:sellerId',DecodeUser,CheckIfSeller, deleteSeller);



module.exports = sellerRoutes;