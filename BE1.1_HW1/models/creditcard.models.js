const mongoose = require('mongoose');

const creditCardSchema = new mongoose.Schema({
    bankName: {
        type: String,
        required: true,
    },
    cardNumber: {
        type: String,
        required: true,
        unique: true,
    },
    expirationDate: {
        type: Date,
        required: true,
    },
    cardHolderName: {
        type: String,
        required: true,
    },
});

const CreditCard = mongoose.model("CreditCard", creditCardSchema);
module.exports = CreditCard;