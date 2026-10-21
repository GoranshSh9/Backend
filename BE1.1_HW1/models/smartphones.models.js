const mongoose = require('mongoose');

const smartphoneSchema = new mongoose.Schema({
    smartphoneBrand: {
        type: String,
        required: true,
    },
    smartphoneModel: {
        type: String,
        required: true,
    },
    releaseYear: {
        type: Number,
        required: true,
    },
    operatingSystem: {
        type: String,
        required: true,
    },
    displaySize: {
        type: String,
        required: true,
    },
    storageCapacity: {
        type: String,
        required: true,
    },
    ram: {
        type: String,
        required: true,
    },
    cameraSpecs: {
        type: Object,
        required: true,
    },
    batteryCapacity: {
        type: String,
        required: true,
    },
    connectivity: [{
        type: String,
        enum: ['4G', '5G', 'Wi-Fi', 'Bluetooth', 'NFC', 'USB-C', 'Headphone Jack', 'Other'],
        required: true
    }],
    price: {
        type: Number,
        required: true,
    },
    colorsAvailable: [{
        type: String,
    }],
    specialFeatures: [{
        type: String,
    }],
}, { timestamps: true, });

const Smartphone = mongoose.model("Smartphone", smartphoneSchema);
module.exports = Smartphone;
