const SiguroShtepin1 = require('../models/siguroShtepin1');


// @route  GET api/items/siguroShtepin1
// @desc   Get all siguroShtepin1 history
// @access Private
exports.get_all_siguroShtepin1_history = async (req, res) => {
    try {
        // const yearInMs = +new Date(req.query.year, 0);
        // const siguroShtepin1History = await siguroShtepin1.find({ createdAt: { $gte: yearInMs } }).sort('-createdAt');
        const siguroShtepin1History = await SiguroShtepin1.find().sort('-createdAt');
        if (siguroShtepin1History) {
            res.status(200).json({
                success: true,
                data: siguroShtepin1History
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

// @route  POST api/items/siguroShtepin1
// @desc   Add new item on siguroShtepin1 history
// @access Private
exports.add_siguroShtepin1 = async (req, res) => {
    try {
        const { constructionCategory, object, seizmikZone, value, gadgeets, lived, clientFee, earhquace, earthquaceFee, heavyDoors, otherInsurance, insuranceStart } = req.body;
        const newItemData = {constructionCategory, object, seizmikZone, value, gadgeets, lived, clientFee, earhquace, earthquaceFee, heavyDoors, otherInsurance, insuranceStart, createdAt: Date.now() };
        const newsiguroShtepin1HistoryItem = await SiguroShtepin1.create(newItemData);
        res.status(201).json({
            success: true,
            data: newsiguroShtepin1HistoryItem
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

// @route  POST api/items/siguroShtepin1/:id
// @desc   Change siguroShtepin1 history item
// @access Private
exports.change_siguroShtepin1_history = async (req, res) => {
    try {
        const { constructionCategory, object, seizmikZone, value, gadgeets, lived, clientFee, earhquace, earthquaceFee, heavyDoors, otherInsurance, insuranceStart } = req.body;
        const updatedData = { constructionCategory, object, seizmikZone, value, gadgeets, lived, clientFee, earhquace, earthquaceFee, heavyDoors, otherInsurance, insuranceStart };

        const changed = await SiguroShtepin1.findOneAndUpdate({ _id: req.params.id }, updatedData, { new: true, useFindAndModify: false });
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

// @route  DELETE api/items/siguroShtepin1/:id
// @desc   Delete a siguroShtepin1 history items
// @access Private
exports.delete_siguroShtepin1_history = async (req, res) => {
    try {
        const carPickerHistoryToDelete = await SiguroShtepin1.findById(req.params.id);
        if (carPickerHistoryToDelete) {
            await SiguroShtepin1.deleteOne({ _id: req.params.id });
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