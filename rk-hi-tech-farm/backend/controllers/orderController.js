const Order = require('../models/Order');
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createOrder = async (req, res) => {
  const { products, totalAmount } = req.body;
  try {
    const order = new Order({
      user: req.user.id,
      products,
      totalAmount,
    });
    await order.save();

    const razorpayOrder = await razorpay.orders.create({
      amount: totalAmount * 100, // Convert to paise
      currency: 'INR',
      receipt: order._id.toString(),
    });

    res.json({ order, razorpayOrder });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find(req.user.role === 'admin' ? {} : { user: req.user.id }).populate('products.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};