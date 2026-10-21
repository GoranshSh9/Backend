const mongoose = require('mongoose');

const productCardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
});

const ProductCard = mongoose.model("ProductCard", productCardSchema);
module.exports = ProductCard;
