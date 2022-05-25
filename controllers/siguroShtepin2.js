const SiguroShtepin2 = require('../models/siguroShtepin2');


// @route  GET api/items/siguroShtepin2
// @desc   Get all siguroShtepin2 history
// @access Private
exports.get_all_siguroShtepin2_history = async (req, res) => {
    try {
        // const yearInMs = +new Date(req.query.year, 0);
        // const siguroShtepin2History = await siguroShtepin2.find({ createdAt: { $gte: yearInMs } }).sort('-createdAt');
        const siguroShtepin2History = await SiguroShtepin2.find().sort('-createdAt');
        if (siguroShtepin2History) {
            res.status(200).json({
                success: true,
                data: siguroShtepin2History
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

// @route  POST api/items/siguroShtepin2
// @desc   Add new item on siguroShtepin2 history
// @access Private
exports.add_siguroShtepin2 = async (req, res) => {
    try {
        const { constructionCategory, object, seizmikZone, value, gadgeets, lived, clientFee, earhquace, earthquaceFee, heavyDoors, otherInsurance, insuranceStart } = req.body;
        const newItemData = {constructionCategory, object, seizmikZone, value, gadgeets, lived, clientFee, earhquace, earthquaceFee, heavyDoors, otherInsurance, insuranceStart, createdAt: Date.now() };
        const newsiguroShtepin2HistoryItem = await SiguroShtepin2.create(newItemData);
        res.status(201).json({
            success: true,
            data: newsiguroShtepin2HistoryItem
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

// @route  POST api/items/siguroShtepin2/:id
// @desc   Change siguroShtepin2 history item
// @access Private
exports.change_siguroShtepin2_history = async (req, res) => {
    try {
        const { constructionCategory, object, seizmikZone, value, gadgeets, lived, clientFee, earhquace, earthquaceFee, heavyDoors, otherInsurance, insuranceStart } = req.body;
        const updatedData = { constructionCategory, object, seizmikZone, value, gadgeets, lived, clientFee, earhquace, earthquaceFee, heavyDoors, otherInsurance, insuranceStart };

        const changed = await SiguroShtepin2.findOneAndUpdate({ _id: req.params.id }, updatedData, { new: true, useFindAndModify: false });
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

// @route  DELETE api/items/siguroShtepin2/:id
// @desc   Delete a siguroShtepin2 history items
// @access Private
exports.delete_siguroShtepin2_history = async (req, res) => {
    try {
        const carPickerHistoryToDelete = await SiguroShtepin2.findById(req.params.id);
        if (carPickerHistoryToDelete) {
            await SiguroShtepin2.deleteOne({ _id: req.params.id });
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