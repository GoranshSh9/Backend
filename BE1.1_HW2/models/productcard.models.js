const mongoose = require('mongoose');

const productCardSchema = new mongoose.Schema({
    productImage: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    assurance: {
        type: Boolean,
    },
    price: {
        type: Number,
        required: true,
    },
    offers: [{
        type: String,
    }],
    variants: [{
        type: String,
    }],
});

const ProductCard = mongoose.model("ProductCard", productCardSchema);
module.exports = ProductCard;
