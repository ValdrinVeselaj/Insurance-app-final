const mongoose = require('mongoose');

// carPicker schema
const SiguroShtepin3 = mongoose.Schema({
    constructionCategory: {
        type: String,
        required: true
    },
    object: {
        type: String,
        required: true
    },
    seizmikZone: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    gadgeets: {
        type: String,
        required: true
    },
    lived: {
        type: String,
        required: true
    },
    clientFee: {
        type: String,
        required: true
    },
    earhquace: {
        type: String,
        required: true
    },
    earthquaceFee: {
        type: String,
        required: true
    },
    heavyDoors: {
        type: String,
        required: true
    },
    otherInsurance: {
        type: String,
        required: true
    },
    insuranceStart: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    }

}, { collection: 'siguroShtepin3' });

module.exports = mongoose.model('siguroShtepin3', SiguroShtepin3);