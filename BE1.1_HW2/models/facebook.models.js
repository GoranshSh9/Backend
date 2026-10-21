const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    content: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    likes: {
        type: Number,
        default: 0,
    },
    comments: [{
        type: String,
    }],
    shares: {
        type: Number,
        default: 0,
    },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;