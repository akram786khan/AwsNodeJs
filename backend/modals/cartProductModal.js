const mongoose = require("mongoose")
const projectcartschema = new mongoose.Schema({
    title: { type: String },
    Image: { type: String },
    disPrice: { type: String },
    sellingPrice: { type: String },
    disPrsent: { type: String },
    color: { type: String },
    COD: { type: String },
    Status: { type: String },
    size: { type: String },
    quentity: { type: String },
    User_id: {
        type: String,
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("Cartproduct", projectcartschema)