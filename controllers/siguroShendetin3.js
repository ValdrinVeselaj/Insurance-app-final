const SiguroShendetin3 = require('../models/siguroShendetin3');


// @route  GET api/items/siguroShendetin3
// @desc   Get all siguroShendetin3 history
// @access Private
exports.get_all_siguroShendetin3_history = async (req, res) => {
    try {
        // const yearInMs = +new Date(req.query.year, 0);
        // const siguroShendetin3History = await siguroShendetin3.find({ createdAt: { $gte: yearInMs } }).sort('-createdAt');
        const siguroShendetin3History = await SiguroShendetin3.find().sort('-createdAt');
        if (siguroShendetin3History) {
            res.status(200).json({
                success: true,
                data: siguroShendetin3History
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

// @route  POST api/items/siguroShendetin3
// @desc   Add new item on siguroShendetin3 history
// @access Private
exports.add_siguroShendetin3 = async (req, res) => {
    try {
        const { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth } = req.body;
        const newItemData = { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth, createdAt: Date.now() };
        const newsiguroShendetin3HistoryItem = await SiguroShendetin3.create(newItemData);
        res.status(201).json({
            success: true,
            data: newsiguroShendetin3HistoryItem
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

// @route  POST api/items/siguroShendetin3/:id
// @desc   Change siguroShendetin3 history item
// @access Private
exports.change_siguroShendetin3_history = async (req, res) => {
    try {
        const { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth } = req.body;
        const updatedData = { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth };

        const changed = await SiguroShendetin3.findOneAndUpdate({ _id: req.params.id }, updatedData, { new: true, useFindAndModify: false });
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

// @route  DELETE api/items/siguroShendetin3/:id
// @desc   Delete a siguroShendetin3 history items
// @access Private
exports.delete_siguroShendetin3_history = async (req, res) => {
    try {
        const carPickerHistoryToDelete = await SiguroShendetin3.findById(req.params.id);
        if (carPickerHistoryToDelete) {
            await SiguroShendetin3.deleteOne({ _id: req.params.id });
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