const mongoose = require('mongoose');

// carPicker schema
const SiguroShendetin2 = mongoose.Schema({
    namelastName: {
        type: String,
        required: true
    },
    idNumber: {
        type: String,
        required: true
    },
    peopleNumber: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    }
}, { collection: 'siguroShendetin2' });

module.exports = mongoose.model('siguroShendetin2', SiguroShendetin2);