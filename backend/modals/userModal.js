const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add an name ']
    },
    email: {
        type: String,
        required: [true, 'Please add an Email']
    },
    password: {
        type: Number,
        required: [true, 'Please add an password']
    },
    MoNumber: {
        type: Number,
        required: [true, 'Please add an MoNumber']
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('users', UserSchema);
