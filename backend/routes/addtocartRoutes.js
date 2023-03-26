const express = require('express');
const router = express.Router();
const { getCartProduct, addCartProduct, DeleteProduct } = require('../controllers/cartProducts/cartProducts')
const { protect } = require('../middleware/authMiddleware');
router.get('/getCartProduct', protect, getCartProduct)
router.post('/addCartProduct', protect, addCartProduct)
router.delete('/DeleteProduct/:id', protect, DeleteProduct)
module.exports = router;