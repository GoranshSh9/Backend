const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        enum: ['Pop', 'Rock', 'Hip-Hop', 'Jazz', 'Classical', 'Country', 'Electronic', 'R&B', 'Reggae'],
    },
    releaseYear: {
        type: Number,
    },
    recordLabel: {
        type: String,
    },
    format: {
        type: String,
    },
    isExplicit: {
        type: Boolean,
        default: false,
    },
    isAvailableOnStreaming: {
        type: Boolean,
        default: false,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

const Album = mongoose.model("Album", albumSchema);
module.exports = Album;
