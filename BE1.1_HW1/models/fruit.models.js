const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    fruitImageUrl: {
        type: String,
        required: true,
    },
    fruitName: {
        type: String,
        required: true,
    },
    fruitDescription: {
        type: String,
        required: true,
    },
    fruitCalories: {
        type: Number,
        required: true,
    },
    fruitCarbohydrates: {
        type: Number,
        required: true,
    },
    fruitProtein: {
        type: Number,
        required: true,
    },
    fruitFat: {
        type: Number,
        required: true,
    },
});

const Fruit = mongoose.model("Fruit", fruitSchema);
module.exports = Fruit;