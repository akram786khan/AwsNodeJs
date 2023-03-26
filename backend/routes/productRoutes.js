const express = require('express');
const router = express.Router();
const users = require('../modals/userModal');
const { getproduct, addproduct, updateproduct, deleteproduct, findids } = require('../controllers/productController');
router.get('/getProducts', getproduct);
router.post('/addProducts', addproduct);
router.put('/updateProducts', updateproduct);
router.delete('/deleteProducts/:_id', deleteproduct);
router.delete('/findById', findids);
router.get('/Allproducts', async (req, res) => {
    res.status(200).json({
        status: true, data: [
            { 'id': 1, 'price': '$19.5', 'title': 'Fashion-Shoes', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-1.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "White", "size": "XL", "qun": "1" },
            { 'id': 2, 'price': '$29.5', 'title': 'Fashion-Cort', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "black", "size": "XXL", "qun": "1" },
            { 'id': 3, 'price': '$20', 'title': 'Casual-Shoes', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "blue", "size": "L", "qun": "1" },
            { 'id': 4, 'price': '$5', 'title': 'Winter-Clothe', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "red", "size": "XXL", "qun": "1" },
            { 'id': 5, 'price': '$23', 'title': 'Printed-T-Sirt', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "blue", "size": "S", "qun": "1" },
            { 'id': 6, 'price': '$9.67', 'title': 'Winter', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-6.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "White", "size": "XL", "qun": "1" },
            { 'id': 7, 'price': '$24.5', 'title': 'Bag', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-7.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "black", "size": "XL", "qun": "1" },
            { 'id': 8, 'price': '$18.2', 'title': 'T-Sirt', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-8.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "yellow", "size": "L", "qun": "1" }
        ]
    })
});
module.exports = router;