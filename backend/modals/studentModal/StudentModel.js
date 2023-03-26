const mongoose = require("mongoose")
const student = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add an name']
    },
    course: {
        type: String,
        required: [true, 'Please add an course']

    },
    email: {
        type: String,
        required: [true, 'Please add an email']

    },
    subject: {
        type: String,
        required: [true, 'Please add an subject']

    },
    number: {
        type: String,
        required: [true, 'Please add an number']

    },
    gender: {
        type: String,
        required: [true, 'Please add an gender']
    },
    schoolname: {
        type: String,
        required: [true, 'Please add an schoolname']
    },
    country: {
        type: String,
        required: [true, 'Please add an country']

    }

})

module.exports = mongoose.model("Todustudent", student)