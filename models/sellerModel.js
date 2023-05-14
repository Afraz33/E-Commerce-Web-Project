const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  sellerId: { type: Number, required: true, unique: true },
  contact: { type: String },
  city: { type: String },
  province: { type: String },
  address: { type: String },
  flagCount: { type: Number, default: 0 },
});

module.exports = mongoose.model('Seller', sellerSchema);
