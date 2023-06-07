const Promotion = require('../models/promotionModel');
// CREATE - middleware to create a new promotion
let createPromotion = async (req, res, next) => {
    try {
      const { promotionDescription, promotionType, promotionCode, promotionSellerId } = req.body;
  
      // create a new promotion object
      const promotion = new Promotion({
        promotionDescription,
        promotionType,
        promotionCode,
        promotionSellerId,
      });
  
      // save the promotion object to MongoDB
      await promotion.save();
  
     
  
      res.json(promotion);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };


  
  // READ - middleware to get a single promotion by promotion code
  let getPromotion = async (req, res) => {
    try {
      const { promotionCode } = req.params;
  
      // find the promotion document in MongoDB by promotion code
      const promotion = await Promotion.findOne({ promotionCode });
  
      if (!promotion) {
        return res.status(404).json({ msg: 'Promotion not found' });
      }
  
      res.json(promotion);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };
  


  // UPDATE - middleware to update a promotion by promotion code
  let updatePromotion = async (req, res) => {
    try {
      const { promotionCode } = req.params;
      const { promotionDescription, promotionType } = req.body;
  
      // find and update the promotion document in MongoDB by promotion code
      let promotion = await Promotion.findOneAndUpdate(
        { promotionCode },
        { promotionDescription, promotionType },
        { new: true }
      );
  
      if (!promotion) {
        return res.status(404).json({ msg: 'Promotion not found' });
      }
  
      res.json(promotion);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };
  



  // DELETE - middleware to delete a promotion by promotion code
  let deletePromotion = async (req, res) => {
    try {
      const { promotionCode } = req.params;
  
      // find and delete the promotion document in MongoDB by promotion code
      let promotion = await Promotion.findOneAndDelete({ promotionCode });
  
      if (!promotion) {
        return res.status(404).json({ msg: 'Promotion not found' });
      }
  
      res.json({ msg: 'Promotion deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };




  // READ - middleware to get all promotions for a seller by seller ID
let getAllPromotions = async (req, res) => {
    try {
      const { promotionSellerId } = req.params;
  
      // find all promotions with the specified seller ID
      const promotions = await Promotion.find({ promotionSellerId });
  
      if (!promotions) {
        return res.status(404).json({ msg: 'Promotions not found' });
      }
  
      // extract the promotion codes from the promotion documents
      else {
      
      res.json({ promotions });}

    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };
  
 
  
  
  module.exports = {
    createPromotion,
    getPromotion,
    updatePromotion,
    deletePromotion,
    getAllPromotions,
  };
  