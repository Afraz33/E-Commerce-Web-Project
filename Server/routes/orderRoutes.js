const {isLoggedIn,DecodeUser,CheckIfSeller} = require('../controllers/authController.js');
const orderRoutes = require("express").Router();
const {viewOrdersBySeller,updateOrderStatusById} = require('../controllers/orderController.js');



//Get Orders Route
orderRoutes.get('/viewOrders/:sellerId',DecodeUser,CheckIfSeller, viewOrdersBySeller);

//Update Order Status Route
orderRoutes.put('/updateOrderStatus/:orderId',DecodeUser,CheckIfSeller, updateOrderStatusById);



module.exports = orderRoutes;