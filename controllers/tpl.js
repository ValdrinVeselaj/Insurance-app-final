const Tpl = require('../models/tpl');


// @route  GET api/items/tpl
// @desc   Get all tpl history
// @access Private
exports.get_all_tpl_history = async (req, res) => {
    try {
        // const yearInMs = +new Date(req.query.year, 0);
        // const tplHistory = await Tpl.find({ createdAt: { $gte: yearInMs } }).sort('-createdAt');
        const tplHistory = await Tpl.find().sort('-createdAt');
        if (tplHistory) {
            res.status(200).json({
                success: true,
                data: tplHistory
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
exports.add_tpl = async (req, res) => {
    try {
        const { namelastName, idNumber, modelType, phone, plateNumber } = req.body;
        const newItemData = { namelastName, idNumber, modelType, phone, plateNumber, createdAt: Date.now() };
        const newTplHistoryItem = await Tpl.create(newItemData);
        res.status(201).json({
            success: true,
            data: newTplHistoryItem
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

// @route  POST api/items/tpl/:id
// @desc   Change tpl history item
// @access Private
exports.change_tpl_history = async (req, res) => {
    try {
        const { namelastName, modelType, phone, plateNumber } = req.body;
        const updatedData = { namelastName, modelType, phone, plateNumber };

        const changed = await Tpl.findOneAndUpdate({ _id: req.params.id }, updatedData, { new: true, useFindAndModify: false });
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
exports.delete_tpl_history = async (req, res) => {
    try {
        const carPickerHistoryToDelete = await Tpl.findById(req.params.id);
        if (carPickerHistoryToDelete) {
            await Tpl.deleteOne({ _id: req.params.id });
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