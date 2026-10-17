const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
        required: true,
    },
    cuisine: [{
        type: String,
        enum: ['Italian', 'Chinese', 'Indian', 'Mexican', 'Japanese', 'Mediterranean', 'Thai', 'French', 'American', 'Spanish', 'Vegetarian', 'Other'],
    }],
    location: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    website: {
        type: String,
    },
    openingYear: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,
    },
    specialDishes: [{
        type: String,
    }],
    photoUrl: {
        type: String,
    },
}, { timestamps: true,
 });

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
