const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    recipeImage: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    servingSize: {
        type: Number,
    },
    preparationTime: {
        type: Number,
    },
    ingredients: [{
        type: String,
    }],
    directions: [{
        type: String,
    }],
    notes: {
        type: String,
    },
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
