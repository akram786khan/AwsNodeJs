//const db = require('../config');
//db();
const jwt = require("jsonwebtoken")
//const mongodb = require('mongodb');
const cartproduct = require('../../modals/cartProductModal');
const asyncHandler = require('express-async-handler');



const getCartProduct = async (req, res) => {
    let data = await cartproduct.find({ User_id: req.user });


    if (!data.length) {
        res.status(200).json({ status: false, message: [] })
    }
    res.status(200).json({ status: true, message: data })
}
const addCartProduct = asyncHandler(async (req, res) => {
    console.log("rerrrrr======>", req.user)
    const { title, dis, price, reting, img, color, size, qun } = req.body
    if (!title && !dis && !price && !reting && !img && !color && !size && !qun) {
        res.status(400).json({ message: "Please add all Filed" })
    }

    let data = await cartproduct.create({
        title,
        dis,
        img,
        price,
        reting,
        color,
        size,
        qun,
        User_id: req.user
    });
    if (!data) {
        res.status(404).json({ error: "data is not difine" })
    }
    console.log("====>", data);
    res.status(200).json({ status: true, message: data })
})

const DeleteProduct = asyncHandler(async (req, res) => {
    const fintId = await cartproduct.findById(req.params.id);
    if (!fintId) {
        res.status(400).json({ message: "cart product Not Found" })

    }
    await fintId.remove();
    res.status(200).json({ message: `delete cartproduct data ${req.params.id}` });

})
module.exports = {
    getCartProduct, addCartProduct, DeleteProduct
}