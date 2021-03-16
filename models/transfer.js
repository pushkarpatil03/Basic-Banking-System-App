const mongoose = require('mongoose');

const TransferSchema = new mongoose.Schema({
    sender : {
        type : String,
        required: true
    },
    receiver : {
        type : String,
        required: true
    },
    amount : {
        type : Number,
        required: true
    }
})

const Transfer = mongoose.model('Transfer', TransferSchema);

module.exports = Transfer;