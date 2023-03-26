

const mongoose = require("mongoose")
const stucountry = new mongoose.Schema({
    CountryCode: {
        type: String
    },
    CountryName: {
        type: String
    },
    CountrySchool: {
        type: Array
    }
})


module.exports = mongoose.model("studentcountry", stucountry)