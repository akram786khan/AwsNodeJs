//const db = require('../config');
//db();
const jwt = require("jsonwebtoken")
//const mongodb = require('mongodb');
const wishListproduct = require('../../modals/wishListProductsModel');
const asyncHandler = require('express-async-handler');

const getWishListProduct = async (req, res) => {
    let data = await wishListproduct.find({ User_id: req.user });


    if (!data.length) {
        res.status(200).json({ status: false, message: [] })
    }
    res.status(200).json({ status: true, message: data })
}
const addWishListProduct = asyncHandler(async (req, res) => {
    console.log("rerrrrr======>", req.user)
    const { title, dis, price, reting, img, color, size, qun } = req.body
    if (!title && !dis && !price && !reting && !img && !color && !size) {
        res.status(400).json({ message: "Please add all Filed" })
    }

    let data = await wishListproduct.create({
        title,
        dis,
        img,
        price,
        reting,
        color,
        size,
        User_id: req.user
    });
    if (!data) {
        res.status(404).json({ error: "data is not difine" })
    }
    console.log("====>", data);
    res.status(200).json({ status: true, message: data })
})

const DeleteWishListProduct = asyncHandler(async (req, res) => {
    const fintId = await wishListproduct.findById(req.params.id);
    console.log("=====dsd>>", fintId);
    if (!fintId) {
        res.status(400).json({ message: "WishList product Not Found" })

    }
    await fintId.remove();
    res.status(200).json({ message: `delete wishListproduct data ${req.params.id}` });

})
module.exports = {
    getWishListProduct, addWishListProduct, DeleteWishListProduct
}