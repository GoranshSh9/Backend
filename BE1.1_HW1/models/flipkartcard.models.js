const mongoose = require('mongoose');

const flipkartCardSchema = new mongoose.Schema({
    productImageUrl: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    discountPercentage: {
        type: Number,
        required: true,
    },
    flipkartAssured: {
        type: Boolean,
        default: true,
    },
    freeDelivery: {
        type: Boolean,
        default: true,
    },
    stockLeft: {
        type: Number,
        required: true,
    },
});

const FlipkartCard = mongoose.model("FlipkartCard", flipkartCardSchema);

module.exports = FlipkartCard;