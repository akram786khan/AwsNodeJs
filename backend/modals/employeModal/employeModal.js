const mongoose = require("mongoose")
const Employschema = new mongoose.Schema({
    Employid: {
        type: String,
        required: [true, 'Please add an Employid']
    },
    Employname: {
        type: String,
        required: [true, 'Please add an Employname']

    },
    Employemail: {
        type: String,
        required: [true, 'Please add an Employemail']

    },
    Employnumber: {
        type: String,
        required: [true, 'Please add an Employnumber']

    },
    Employaddress: {
        type: String,
        required: [true, 'Please add an Employaddress']

    },
    Employdob: {
        type: String,
        required: [true, 'Please add an Employdob']

    },
    Employment: {
        type: String,
        required: [true, 'Please add an Employment']

    },
});

module.exports = mongoose.model("Employ", Employschema)