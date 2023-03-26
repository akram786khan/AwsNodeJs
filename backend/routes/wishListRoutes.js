const express = require('express');
const router = express.Router();
const { getWishListProduct, addWishListProduct, DeleteWishListProduct } = require('../controllers/WishListProduct/WishListProduct')
const { protect } = require('../middleware/authMiddleware');
router.get('/getWishListProduct', protect, getWishListProduct)
router.post('/addWishListProduct', protect, addWishListProduct)
router.delete('/DeleteWishListProduct/:id', protect, DeleteWishListProduct)
module.exports = router;