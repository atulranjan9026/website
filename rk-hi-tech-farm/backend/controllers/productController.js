const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const { name, description, price, image, stock } = req.body;
  try {
    const product = new Product({ name, description, price, image, stock });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!product) return res.status(404).json({ msg: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ msg: 'Product not found' });
    res.json({ msg: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};