

const mongoose = require("mongoose")
const userprofile = new mongoose.Schema({
    ImageUrl: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    number: {
        type: String
    },
    gender: {
        type: String
    }
})


module.exports = mongoose.model("profile", userprofile)