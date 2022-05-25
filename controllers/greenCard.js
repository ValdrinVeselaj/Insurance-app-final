const GreenCard = require('../models/greenCard');


// @route  GET api/items/greenCard
// @desc   Get all greenCard history
// @access Private
exports.get_all_greenCard_history = async (req, res) => {
    try {
        // const yearInMs = +new Date(req.query.year, 0);
        // const greenCardHistory = await GreenCard.find({ createdAt: { $gte: yearInMs } }).sort('-createdAt');
        const greenCardHistory = await GreenCard.find().sort('-createdAt');
        if (greenCardHistory) {
            res.status(200).json({
                success: true,
                data: greenCardHistory
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

// @route  POST api/items/greenCard
// @desc   Add new item on greenCard history
// @access Private
exports.add_greenCard= async (req, res) => {
    // try {
        const { namelastName, idNumber, modelType, phone, plateNumber, travelArea, coverage } = req.body;
        const newItemData = { namelastName, idNumber, modelType, phone, plateNumber, travelArea, coverage, createdAt: Date.now() };
        console.log
        const greenCardHistory = await GreenCard.create(newItemData);
        res.status(201).json({
            success: true,
            data: greenCardHistory
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

// @route  POST api/items/greenCard/:id
// @desc   Change tpl history item
// @access Private
exports.change_greenCard_history = async (req, res) => {
    try {
        const { namelastName, idNumber, modelType, phone, plateNumber, travelArea, coverage } = req.body;
        const updatedData = { namelastName, idNumber, modelType, phone, plateNumber, travelArea, coverage };

        const changed = await GreenCard.findOneAndUpdate({ _id: req.params.id }, updatedData, { new: true, useFindAndModify: false });
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

// @route  DELETE api/items/greenCard/:id
// @desc   Delete a greenCard history items
// @access Private
exports.delete_greenCard_history = async (req, res) => {
    try {
        const carPickerHistoryToDelete = await GreenCard.findById(req.params.id);
        if (carPickerHistoryToDelete) {
            await GreenCard.deleteOne({ _id: req.params.id });
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