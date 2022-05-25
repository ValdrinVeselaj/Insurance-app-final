const mongoose = require('mongoose');

// carPicker schema
const SiguroUdhetiminSchema = mongoose.Schema({
    namelastName: {
        type: String,
        required: true
    },
    idNumber: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    peopleNumber: {
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
}, { collection: 'siguroUdhetimin' });

module.exports = mongoose.model('siguroUdhetimin', SiguroUdhetiminSchema);