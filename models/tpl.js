const mongoose = require('mongoose');

// carPicker schema
const TplSchema = mongoose.Schema({
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
    createdAt: {
        type: String,
        required: true
    }
}, { collection: 'tpl' });

module.exports = mongoose.model('tpl', TplSchema);