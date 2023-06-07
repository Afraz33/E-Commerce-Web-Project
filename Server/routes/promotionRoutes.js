const {getAllPromotions, deletePromotion, updatePromotion, getPromotion, createPromotion} = require('../controllers/promotionController');
const {isLoggedIn,DecodeUser,CheckIfSeller} = require('../controllers/authController.js');
const promotionRoutes = require("express").Router();


//Create Promotion Route
promotionRoutes.post('/create-promotion', createPromotion);

//Get Promotion Route
promotionRoutes.get('/getPromotion/:sellerId/:promotionCode', getPromotion);

//Update Promotion Route
promotionRoutes.put('/updatePromotion/:promotionCode', updatePromotion);

//Delete Promotion Route
promotionRoutes.delete('/deletePromotion/:promotionCode', deletePromotion);

//Get All Promotions Route
promotionRoutes.get('/getAllPromotions/:promotionSellerId', getAllPromotions);

module.exports = promotionRoutes;

