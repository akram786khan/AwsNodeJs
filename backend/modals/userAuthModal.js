const mongoose = require('mongoose');
const UserAuthSchema = new mongoose.Schema({
    lastName: {
        type: String,
        required: [true, 'Please add an firstName ']
    },
    firstName: {
        type: String,
        required: [true, 'Please add an firstName ']
    },
    email: {
        type: String,
        required: [true, 'Please add an Email']
    },
    password: {
        type: Number,
        required: [true, 'Please add an password']
    },
    gender: {
        type: String,
        required: [true, 'Please add an gender']
    },



}, {
    timestamps: true
});

module.exports = mongoose.model('userAuthLoginSignUp', UserAuthSchema);
