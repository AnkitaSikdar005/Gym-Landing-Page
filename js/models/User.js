const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required : true
    },
    gender: {
        type: String,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    phno: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;