const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
    },
    bio: {
        type: String,
    },
    profilePicUrl: {
        type: String,
    },
    followingCount: {
        type: Number,
        default: 0,
    },
    followerCount: {
        type: Number,
        default: 0,
    },
    companyName: {
        type: String,
    },
    location: {
        type: String,
    },
    portfolioUrl: {
        type: String,
    },
 }, {
        timestamps: true,
    });

const UserProfile = mongoose.model("UserProfile", userProfileSchema);
module.exports = UserProfile;
