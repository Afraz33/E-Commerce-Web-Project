const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  ProductID: { type: Number, required: true, unique: true },
  sellerId: { type: String, required: true },
  customerId: { type: String, required: true },
  orderId: { type: String, required: true },
  orderStatus: { type: String, required: true },
 shippingAddress: { type: String, required: true },
 orderPrice: { type: String, required: true },
  
});

module.exports = mongoose.model('orders', orderSchema);
