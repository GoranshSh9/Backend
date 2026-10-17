const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishedYear: {
        type: Number,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
        unique: true,
    },
    genre: [{
        type: String,
        enum: ["Fiction", "Non-Fiction", "Science Fiction", "Fantasy", "Mystery", "Romance", "Thriller", "Biography", "Historical", "Self-Help", "Other"],
    }],
    language: {
        type: String,
        required: true,
    },
    publishingCountry: {
        type: String,
        default: "United States",
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0,
    },
    summary: {
        type: String,
    },
    coverImageUrl: {
        type: String,
    },
}, { timestamps: true,
 });

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;

