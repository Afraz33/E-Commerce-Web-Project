const {getAllPromotions, deletePromotion, updatePromotion, getPromotion, createPromotion} = require('../controllers/promotionController');
const {isLoggedIn,DecodeUser,CheckIfSeller} = require('../controllers/authController.js');
const promotionRoutes = require("express").Router();


//Create Promotion Route
promotionRoutes.post('/create-promotion', createPromotion);

//Get Promotion Route
promotionRoutes.get('/getPromotion/:sellerId/:promotionCode',DecodeUser,CheckIfSeller, getPromotion);

//Update Promotion Route
promotionRoutes.put('/updatePromotion/:promotionCode',DecodeUser,CheckIfSeller, updatePromotion);

//Delete Promotion Route
promotionRoutes.delete('/deletePromotion/:promotionCode',DecodeUser,CheckIfSeller, deletePromotion);

//Get All Promotions Route
promotionRoutes.get('/getAllPromotions/:promotionSellerId',DecodeUser,CheckIfSeller, getAllPromotions);

module.exports = promotionRoutes;

