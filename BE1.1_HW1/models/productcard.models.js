const mongoose = require('mongoose');

const productCardSchema = new mongoose.Schema({
    productImageUrl: String,
    productName: String,
    productDescription: String,
    productInfo: String,
    productColor: [{ 
        type: String,
        enum: ['Red', 'Blue', 'Green', 'Orange', 'Black'],
     }],
    productSize: [{
        type: Number,
        enum: [7, 8, 9, 10, 11],
    }],
    productPrice: Number,
});

const ProductCard = mongoose.model("ProductCard", productCardSchema);

module.exports = ProductCard;