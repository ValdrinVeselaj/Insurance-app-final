const SiguroShtepin3 = require('../models/siguroShtepin3');


// @route  GET api/items/siguroShtepin3
// @desc   Get all siguroShtepin3 history
// @access Private
exports.get_all_siguroShtepin3_history = async (req, res) => {
    try {
        // const yearInMs = +new Date(req.query.year, 0);
        // const siguroShtepin3History = await siguroShtepin3.find({ createdAt: { $gte: yearInMs } }).sort('-createdAt');
        const siguroShtepin3History = await SiguroShtepin3.find().sort('-createdAt');
        if (siguroShtepin3History) {
            res.status(200).json({
                success: true,
                data: siguroShtepin3History
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

// @route  POST api/items/siguroShtepin3
// @desc   Add new item on siguroShtepin3 history
// @access Private
exports.add_siguroShtepin3 = async (req, res) => {
    try {
        const { constructionCategory, object, seizmikZone, value, gadgeets, lived, clientFee, earhquace, earthquaceFee, heavyDoors, otherInsurance, insuranceStart } = req.body;
        const newItemData = {constructionCategory, object, seizmikZone, value, gadgeets, lived, clientFee, earhquace, earthquaceFee, heavyDoors, otherInsurance, insuranceStart, createdAt: Date.now() };
        const newsiguroShtepin3HistoryItem = await SiguroShtepin3.create(newItemData);
        res.status(201).json({
            success: true,
            data: newsiguroShtepin3HistoryItem
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

// @route  POST api/items/siguroShtepin3/:id
// @desc   Change siguroShtepin3 history item
// @access Private
exports.change_siguroShtepin3_history = async (req, res) => {
    try {
        const { constructionCategory, object, seizmikZone, value, gadgeets, lived, clientFee, earhquace, earthquaceFee, heavyDoors, otherInsurance, insuranceStart  } = req.body;
        const updatedData = { constructionCategory, object, seizmikZone, value, gadgeets, lived, clientFee, earhquace, earthquaceFee, heavyDoors, otherInsurance, insuranceStart  };

        const changed = await SiguroShtepin3.findOneAndUpdate({ _id: req.params.id }, updatedData, { new: true, useFindAndModify: false });
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

// @route  DELETE api/items/siguroShtepin3/:id
// @desc   Delete a siguroShtepin3 history items
// @access Private
exports.delete_siguroShtepin3_history = async (req, res) => {
    try {
        const carPickerHistoryToDelete = await SiguroShtepin3.findById(req.params.id);
        if (carPickerHistoryToDelete) {
            await SiguroShtepin3.deleteOne({ _id: req.params.id });
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