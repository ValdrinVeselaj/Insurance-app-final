const mongoose = require('mongoose');

// carPicker schema
const KaskoSchema = mongoose.Schema({
    namelastName: {
        type: String,
        required: true
    },
    modelType: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    plateNumber: {
        type: String,
        required: true
    },
    coverage: {
        type: String,
        required: true
    },
    insured: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    reprezantive: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    deshmiAftesie: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    accidents: {
        type: String,
        required: true
    },
    accidentNumber: {
        type: String,
        required: true
    },
    fault: {
        type: String,
        required: true
    },
    driversLicenceTime: {
        type: String,
        required: true
    },
    carUsage: {
        type: String,
        required: true
    },
    chassisNumber: {
        type: String,
        required: true
    },
    engineDisplacement: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    rental: {
        type: String,
        required: true
    },
    fuelEconomy: {
        type: String,
        required: true
    },
    kmPerYear: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    seats: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    insuredPrice: {
        type: String,
        required: true
    },
    insuredPrice: {
        type: String,
        required: true
    },
    carParking: {
        type: String,
        required: true
    },
    fuelType: {
        type: String,
        required: true
    },
    kmCrosed: {
        type: String,
        required: true
    },
    tplInsurance: {
        type: String,
        required: true
    },
    accidentalDamage: {
        type: String,
        required: true
    },
    glassBreaks: {
        type: String,
        required: true
    },
    fire: {
        type: String,
        required: true
    },
    naturalCauses: {
        type: String,
        required: true
    },
    robery: {
        type: String,
        required: true
    },
    parkingHitAndRun: {
        type: String,
        required: true
    },
    vandalisem: {
        type: String,
        required: true
    },
    internacionalInsurance: {
        type: String,
        required: true
    },
    namelastName2: {
        type: String,
        required: false
    },
    phone2: {
        type: String,
        required: false
    },
    dateOfBirth2: {
        type: String,
        required: false
    },
    profession2: {
        type: String,
        required: false
    },
    deshmiAftesie2: {
        type: String,
        required: false
    },
    gender2: {
        type: String,
        required: false
    },
    accidents2: {
        type: String,
        required: false
    },
    accidentNumber2: {
        type: String,
        required: false
    },
    fault2: {
        type: String,
        required: false
    },
    driversLicenceTime2: {
        type: String,
        required: true
    },
    driversLicenceTime3: {
        type: String,
        required: false
    },
    driversLicenceTime4: {
        type: String,
        required: false
    },
    carUsage2: {
        type: String,
        required: false
    },

    createdAt: {
        type: String,
        required: true
    }
}, { collection: 'kasko' });


module.exports = mongoose.model('kasko', KaskoSchema);