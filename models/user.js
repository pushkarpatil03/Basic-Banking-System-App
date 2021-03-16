const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Sno: Number,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        min: 0,
        required: true
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;