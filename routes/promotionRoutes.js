const {getAllPromotions, deletePromotion, updatePromotion, getPromotion, createPromotion} = require('../controllers/promotionController');
const {isLoggedIn} = require('../controllers/authController.js');
const promotionRoutes = require("express").Router();


//Create Promotion Route
promotionRoutes.post('/create-promotion',isLoggedIn, createPromotion);

//Get Promotion Route
promotionRoutes.get('/getPromotion/:sellerId/:promotionCode',isLoggedIn, getPromotion);

//Update Promotion Route
promotionRoutes.put('/updatePromotion/:promotionCode',isLoggedIn, updatePromotion);

//Delete Promotion Route
promotionRoutes.delete('/deletePromotion/:promotionCode',isLoggedIn, deletePromotion);

//Get All Promotions Route
promotionRoutes.get('/getAllPromotions/:sellerId',isLoggedIn, getAllPromotions);

module.exports = promotionRoutes;

