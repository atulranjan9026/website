const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');

router.post('/', auth, productController.createProduct); // Admin only
router.get('/', productController.getProducts); // Public
router.put('/:id', auth, productController.updateProduct); // Admin only
router.delete('/:id', auth, productController.deleteProduct); // Admin only

module.exports = router;