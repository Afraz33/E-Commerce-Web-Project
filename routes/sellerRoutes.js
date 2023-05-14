const {signup, login, getSeller, updateSeller, deleteSeller, DecodeUser, CheckIfSeller } = require('../controllers/sellerController');
const sellerRoutes = require("express").Router();

//Signup Route
sellerRoutes.post('/seller-signup', signup);

//Login Route
sellerRoutes.post('/seller-login', login);

//Get Seller Route
sellerRoutes.get('/getSeller/:sellerId',DecodeUser,CheckIfSeller, getSeller);

//Update Seller Route
sellerRoutes.put('/updateSeller/:sellerId',DecodeUser, CheckIfSeller, updateSeller);

//Delete Seller Route
sellerRoutes.delete('/delete-account/:sellerId',DecodeUser,CheckIfSeller, deleteSeller);



module.exports = sellerRoutes;