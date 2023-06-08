const Order = require('../models/orderModel.js'); // Assuming the order model is in a separate file

// Function to view all non-pending orders for a specific seller ID
let viewOrdersBySeller = async (req, res) => {
  const { sellerId } = req.params;
  
  try {
    const orders = await Order.find({ sellerId, orderStatus: { $ne: 'fulfilled' } });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders for the seller.' });
  }
};

// Function to update the orderStatus of an order based on the order ID
let updateOrderStatusById = async (req, res) => {
  const { orderId } = req.params;
  const { orderStatus } = req.body;
  
  try {
    const order = await Order.findOneAndUpdate({ orderId }, { orderStatus }, { new: true });
    
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update the order status.' });
  }
};


module.exports = {viewOrdersBySeller,updateOrderStatusById};