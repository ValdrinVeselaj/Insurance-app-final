const SiguroShendetin2 = require('../models/siguroShendetin2');


// @route  GET api/items/siguroShendetin2
// @desc   Get all siguroShendetin2 history
// @access Private
exports.get_all_siguroShendetin2_history = async (req, res) => {
    try {
        // const yearInMs = +new Date(req.query.year, 0);
        // const siguroShendetin2History = await siguroShendetin2.find({ createdAt: { $gte: yearInMs } }).sort('-createdAt');
        const siguroShendetin2History = await SiguroShendetin2.find().sort('-createdAt');
        if (siguroShendetin2History) {
            res.status(200).json({
                success: true,
                data: siguroShendetin2History
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

// @route  POST api/items/siguroShendetin2
// @desc   Add new item on siguroShendetin2 history
// @access Private
exports.add_siguroShendetin2 = async (req, res) => {
    try {
        const { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth } = req.body;
        const newItemData = { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth, createdAt: Date.now() };
        const newsiguroShendetin2HistoryItem = await SiguroShendetin2.create(newItemData);
        res.status(201).json({
            success: true,
            data: newsiguroShendetin2HistoryItem
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

// @route  POST api/items/siguroShendetin2/:id
// @desc   Change siguroShendetin2 history item
// @access Private
exports.change_siguroShendetin2_history = async (req, res) => {
    try {
        const { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth } = req.body;
        const updatedData = { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth };

        const changed = await SiguroShendetin2.findOneAndUpdate({ _id: req.params.id }, updatedData, { new: true, useFindAndModify: false });
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

// @route  DELETE api/items/siguroShendetin2/:id
// @desc   Delete a siguroShendetin2 history items
// @access Private
exports.delete_siguroShendetin2_history = async (req, res) => {
    try {
        const carPickerHistoryToDelete = await SiguroShendetin2.findById(req.params.id);
        if (carPickerHistoryToDelete) {
            await SiguroShendetin2.deleteOne({ _id: req.params.id });
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