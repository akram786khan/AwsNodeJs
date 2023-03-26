const mongoose = require("mongoose")
const projectcartschema = new mongoose.Schema({
    title: {
        type: String,
    },
    dis: {
        type: String,
    },
    price: {
        type: String,
    },
    reting: {
        type: String,

    },
    color: {
        type: String,

    },
    img: {
        type: String,

    },
    size: {
        type: String,

    },
    qun: {
        type: String,
    },
    User_id: {
        type: String,
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("Cartproduct", projectcartschema)