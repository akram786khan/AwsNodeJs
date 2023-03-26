const mongoose = require("mongoose")
const projectschema = new mongoose.Schema({
    title: {
        type: String,
    },
    dis: {
        type: String,
    },
    price: {
        type: Number,
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

    }
}, {
    timestamps: true
})


module.exports = mongoose.model("product", projectschema)