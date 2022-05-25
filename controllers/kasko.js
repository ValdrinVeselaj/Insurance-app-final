const Kasko = require('../models/kasko');


// @route  GET api/items/tpl
// @desc   Get all tpl history
// @access Private
exports.get_all_kasko_history = async (req, res) => {
    try {
        // const yearInMs = +new Date(req.query.year, 0);
        // const tplHistory = await kasko.find({ createdAt: { $gte: yearInMs } }).sort('-createdAt');
        const kaskoHistory = await Kasko.find().sort('-createdAt');
        if (kaskoHistory) {
            res.status(200).json({
                success: true,
                data: kaskoHistory
            });
        } else {
            res.status(400).json({
                success: false,
                msg: 'Nuk ka te dhena.'
            });
        }
    } catch (err) {
        const errors = err.errors ? Object.keys(err.errors) : [];
        res.status(400).json({
            success: false,
            msg: 'Diqka shkoi gabim.',
            errors: errors.map(e => err.errors[e].message)
        });
    }
};

// @route  POST api/items/tpl
// @desc   Add new item on tpl history
// @access Private
exports.add_kasko = async (req, res) => {
    // try {
        const {namelastName, modelType, phone, plateNumber, coverage, insured,
            adress, reprezantive, dateOfBirth, profession, deshmiAftesie, gender, accidents, accidentNumber, fault, driversLicenceTime, carUsage, chassisNumber,
            engineDisplacement, value, alarm, rental, fuelEconomy, kmPerYear, brand, color, seats, year, insuredPrice, carParking, fuelType, kmCrosed, tplInsurance,
            accidentalDamage, glassBreaks, fire, naturalCauses, robery, parkingHitAndRun, vandalisem, internacionalInsurance, namelastName2, phone2, dateOfBirth2,
            driversLicenceTime3, driversLicenceTime4, profession2, deshmiAftesie2, gender2, accidents2, accidentNumber2, fault2, driversLicenceTime2, carUsage2} = req.body;
        const newItemData = {namelastName, modelType, phone, plateNumber, coverage, insured,
            adress, reprezantive, dateOfBirth, profession, deshmiAftesie, gender, accidents, accidentNumber, fault, driversLicenceTime, carUsage, chassisNumber,
            engineDisplacement, value, alarm, rental, fuelEconomy, kmPerYear, brand, color, seats, year, insuredPrice, carParking, fuelType, kmCrosed, tplInsurance,
            accidentalDamage, glassBreaks, fire, naturalCauses, robery, parkingHitAndRun, vandalisem, internacionalInsurance, namelastName2, phone2, dateOfBirth2,
            driversLicenceTime3, driversLicenceTime4, profession2, deshmiAftesie2, gender2, accidents2, accidentNumber2, fault2, driversLicenceTime2, carUsage2, createdAt: Date.now() };
        console.log
        const newkaskoHistoryItem = await Kasko.create(newItemData);
        res.status(201).json({
            success: true,
            data: newkaskoHistoryItem
        });
    // } catch (err) {
    //     const errors = err.errors ? Object.keys(err.errors) : [];
    //     res.status(400).json({
    //         success: false,
    //         msg: 'Diqka shkoi gabim.',
    //         errors: errors.map(e => err.errors[e].message)
    //     });
    // }
};

// @route  POST api/items/tpl/:id
// @desc   Change tpl history item
// @access Private
exports.change_kasko_history = async (req, res) => {
    try {
        const {namelastName, modelType, phone, plateNumber, coverage, insured,
            adress, reprezantive, dateOfBirth, profession, deshmiAftesie, gender, accidents, accidentNumber, fault, driversLicenceTime, carUsage, chassisNumber,
            engineDisplacement, value, alarm, rental, fuelEconomy, kmPerYear, brand, color, seats, year, insuredPrice, carParking, fuelType, kmCrosed, tplInsurance,
            accidentalDamage, glassBreaks, fire, naturalCauses, robery, parkingHitAndRun, vandalisem, internacionalInsurance, namelastName2, phone2, dateOfBirth2,
            driversLicenceTime3, driversLicenceTime4, profession2, deshmiAftesie2, gender2, accidents2, accidentNumber2, fault2, driversLicenceTime2, carUsage2} = req.body;
        const updatedData = {namelastName, modelType, phone, plateNumber, coverage, insured,
            adress, reprezantive, dateOfBirth, profession, deshmiAftesie, gender, accidents, accidentNumber, fault, driversLicenceTime, carUsage, chassisNumber,
            engineDisplacement, value, alarm, rental, fuelEconomy, kmPerYear, brand, color, seats, year, insuredPrice, carParking, fuelType, kmCrosed, tplInsurance,
            accidentalDamage, glassBreaks, fire, naturalCauses, robery, parkingHitAndRun, vandalisem, internacionalInsurance, namelastName2, phone2, dateOfBirth2,
            driversLicenceTime3, driversLicenceTime4, profession2, deshmiAftesie2, gender2, accidents2, accidentNumber2, fault2, driversLicenceTime2, carUsage2};

        const changed = await Kasko.findOneAndUpdate({ _id: req.params.id }, updatedData, { new: true, useFindAndModify: false });
        res.status(200).json({
            success: true,
            data: changed
        });
    } catch (err) {
        const errors = err.errors ? Object.keys(err.errors) : [];
        res.status(400).json({
            success: false,
            msg: 'Diqka shkoi gabim.',
            errors: errors.map(e => err.errors[e].message)
        });
    }
};

// @route  DELETE api/items/tpl/:id
// @desc   Delete a tpl history items
// @access Private
exports.delete_kasko_history = async (req, res) => {
    try {
        const carPickerHistoryToDelete = await Kasko.findById(req.params.id);
        if (carPickerHistoryToDelete) {
            await Kasko.deleteOne({ _id: req.params.id });
            res.status(201).json({
                success: true,
                data: carPickerHistoryToDelete
            });
        } else {
            res.status(400).json({
                success: false,
                msg: 'Te dhenat nuk u gjeten.'
            });
        }
    } catch (err) {
        const errors = err.errors ? Object.keys(err.errors) : [];
        res.status(400).json({
            success: false,
            msg: 'Diqka shkoi gabim.',
            errors: errors.map(e => err.errors[e].message)
        });
    }
};