const SiguroShendetin1 = require('../models/siguroShendetin1');


// @route  GET api/items/siguroShendetin1
// @desc   Get all siguroShendetin1 history
// @access Private
exports.get_all_siguroShendetin1_history = async (req, res) => {
    try {
        // const yearInMs = +new Date(req.query.year, 0);
        // const siguroShendetin1History = await siguroShendetin1.find({ createdAt: { $gte: yearInMs } }).sort('-createdAt');
        const siguroShendetin1History = await SiguroShendetin1.find().sort('-createdAt');
        if (siguroShendetin1History) {
            res.status(200).json({
                success: true,
                data: siguroShendetin1History
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

// @route  POST api/items/siguroShendetin1
// @desc   Add new item on siguroShendetin1 history
// @access Private
exports.add_siguroShendetin1 = async (req, res) => {
    try {
        const { namelastName, idNumber, phone, email, adress, city, country, dateOfBirth } = req.body;
        const newItemData = { namelastName, idNumber, phone, email, adress, city, country, dateOfBirth, createdAt: Date.now() };
        const newsiguroShendetin1HistoryItem = await SiguroShendetin1.create(newItemData);
        res.status(201).json({
            success: true,
            data: newsiguroShendetin1HistoryItem
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

// @route  POST api/items/siguroShendetin1/:id
// @desc   Change siguroShendetin1 history item
// @access Private
exports.change_siguroShendetin1_history = async (req, res) => {
    try {
        const { namelastName, idNumber, phone, email, adress, city, country, dateOfBirth  } = req.body;
        const updatedData = { namelastName, idNumber, phone, email, adress, city, country, dateOfBirth  };

        const changed = await SiguroShendetin1.findOneAndUpdate({ _id: req.params.id }, updatedData, { new: true, useFindAndModify: false });
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

// @route  DELETE api/items/siguroShendetin1/:id
// @desc   Delete a siguroShendetin1 history items
// @access Private
exports.delete_siguroShendetin1_history = async (req, res) => {
    try {
        const carPickerHistoryToDelete = await SiguroShendetin1.findById(req.params.id);
        if (carPickerHistoryToDelete) {
            await SiguroShendetin1.deleteOne({ _id: req.params.id });
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