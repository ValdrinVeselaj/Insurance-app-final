const SiguroUdhetimin = require('../models/siguroUdhetimin');


// @route  GET api/items/siguroUdhetimin
// @desc   Get all siguroUdhetimin history
// @access Private
exports.get_all_siguroUdhetimin_history = async (req, res) => {
    try {
        // const yearInMs = +new Date(req.query.year, 0);
        // const siguroUdhetiminHistory = await siguroUdhetimin.find({ createdAt: { $gte: yearInMs } }).sort('-createdAt');
        const siguroUdhetiminHistory = await SiguroUdhetimin.find().sort('-createdAt');
        if (siguroUdhetiminHistory) {
            res.status(200).json({
                success: true,
                data: siguroUdhetiminHistory
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

// @route  POST api/items/siguroUdhetimin
// @desc   Add new item on siguroUdhetimin history
// @access Private
exports.add_siguroUdhetimin = async (req, res) => {
    try {
        const { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth} = req.body;
        const newItemData = { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth, createdAt: Date.now() };
        const newsiguroUdhetiminHistoryItem = await SiguroUdhetimin.create(newItemData);
        res.status(201).json({
            success: true,
            data: newsiguroUdhetiminHistoryItem
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

// @route  POST api/items/siguroUdhetimin/:id
// @desc   Change siguroUdhetimin history item
// @access Private
exports.change_siguroUdhetimin_history = async (req, res) => {
    try {
        const { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth } = req.body;
        const updatedData = { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth};

        const changed = await SiguroUdhetimin.findOneAndUpdate({ _id: req.params.id }, updatedData, { new: true, useFindAndModify: false });
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

// @route  DELETE api/items/siguroUdhetimin/:id
// @desc   Delete a siguroUdhetimin history items
// @access Private
exports.delete_siguroUdhetimin_history = async (req, res) => {
    try {
        const carPickerHistoryToDelete = await siguroUdhetimin.findById(req.params.id);
        if (carPickerHistoryToDelete) {
            await SiguroUdhetimin.deleteOne({ _id: req.params.id });
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