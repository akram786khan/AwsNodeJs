const express = require('express');
const router = express.Router();
const users = require('../modals/studentModal/StudentModel');
const employe = require("../modals/employeModal/employeModal");
const product = require('../modals/productModal');
router.get('/Dashbord', async (req, res) => {
    const data = await users.find();
    const employedata = await employe.find();
    const productdata = await product.find();

    arr = [
        Students = {
            "image": "https://watermark.lovepik.com/photo/20211130/large/lovepik-primary-school-students-study-picture_501212451.jpg",
            "name": "Students",
            "data": data
        },
        Employes = {
            "image": "https://wallpaperaccess.com/full/4322025.jpg",
            "name": "Employes",
            "data": employedata
        },
        Products = {
            "image": "https://stickybranding.com/wp-content/uploads/2019/11/How-to-name-your-product.jpg",
            "name": "Products",
            "data": productdata
        }

    ]
    res.status(200).json(arr)
})


module.exports = router;
