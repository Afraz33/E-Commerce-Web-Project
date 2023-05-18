const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  ProductId: { type: Number, required: true, unique: true },
  sellerId: { type: String, required: true },
  ProductName: { type: String, required: true },
  ProductType: { type: String, required: true },
  ProductDescription: { type: String, required: true },
  ProductPrice: { type: String, required: true },
  Discount: { type: String, required: true },
  ProductImage: { type: String, required: true },
    ProductQuantity: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
