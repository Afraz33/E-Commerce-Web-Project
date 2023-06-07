const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
  promotionDescription: { type: String, required: true },
  promotionType: { type: String, required: true },
  promotionCode: { type: String, required: true, unique: true },
     promotionSellerId: { type: String, required: true },
    

});

module.exports = mongoose.model('Promotion', promotionSchema);
