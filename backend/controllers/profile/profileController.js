//const db = require('../config');
//db();
const jwt = require("jsonwebtoken")
//const mongodb = require('mongodb');
const userprofile = require('../../modals/profileModal/profileModel');
const asyncHandler = require('express-async-handler');



const getProfile = async (req, res) => {
    let data = await userprofile.find({});
    console.log("======>", data);
    res.status(200).json(data)
}


const addProfile = async (req, res) => {
    console.log("reqqqqq..body====>", req.body)
    const { name, email, number, gender } = req.body
    // if (!name && !email && !number && !gender) {
    //     res.status(400).json({ message: "Please add all Filed" })
    // }

    // let data = await userprofile.create({
    //     name: name,
    //     email: email,
    //     number: number,
    //     gender: gender,
    //     ImageUrl: `http://localhost:8000/uploads/images/profile/${req.files[0].filename}`
    // });
    // if (!data) {
    //     res.status(404).json({ error: "data is not difine" })
    // }
    console.log("===urll=>", req);
    // res.status(200).json(data)
}
// const updateproduct = asyncHandler(async (req, res) => {
//     let findid = await product.findById(req.params._id);
//     if (!findid) {
//         res.status(400);
//         res.send("user not found");
//     }

//     const updateusers = await user.findByIdAndUpdate(req.params._id, req.body, {
//         new: true
//     })
//     console.log("=====>", updateusers);
//     // let data = await db();
//     // let result = await  data.updateOne({_id: new mongodb.ObjectId(req.params._id)},{$set:req.body});
//     // res.status(200).json({result})
//     res.status(200).json({ message: `updatedata ${req.params._id}` })
// })
// const deleteproduct = asyncHandler(async (req, res) => {
//     let findid = await product.findById(req.params._id);
//     if (!findid) {
//         res.status(400);
//         res.send("user not found");
//     }
//     await findid.remove();


//     res.status(200).json({ message: `delete data ${req.params._id}` });
// })

// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "20d" })
// }

module.exports = {
    getProfile, addProfile
}