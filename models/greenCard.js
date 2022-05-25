const mongoose = require('mongoose');

// carPicker schema
const GreenCardSchema = mongoose.Schema({
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
    modelType: {
        type: String,
        required: true
    },
    plateNumber: {
        type: String,
        required: true
    },
    travelArea: {
        type: String,
        required: true
    },
    coverage: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    }
}, { collection: 'greenCard' });

module.exports = mongoose.model('greenCard', GreenCardSchema);