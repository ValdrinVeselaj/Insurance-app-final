const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// @route  POST api/auth/register
// @desc   Register new user
// @access Public
exports.registerUser = async (req, res) => {
    const { name, lastName, email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log({firstname:name, lastName, email, password: hashedPassword});
            const newUser = await User.create({ firstname:name, lastName, email, password: hashedPassword });
            res.status(201).json({
                success: true,
                data: {
                    id: newUser._id,
                    email: newUser.email
                }
            });
        } else {
            res.status(400).json({
                success: false,
                msg: 'Ekziston nje perdorues me kete email.'
            });
        }
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: 'Diqka shkoi gabim.'
        });
    }
};

// @route  POST api/auth/login
// @desc   Login user
// @access Public
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            if (await bcrypt.compare(password, user.password)) {
                const userForToken = { name: user.username, email: user.email, id: user.id };
                const accessToken = jwt.sign(userForToken, process.env.CRYPTO_SECRET, { expiresIn: '59m' });
                res.json({
                    success: true,
                    data: {
                        accessToken,
                        user: {
                            id: user._id,
                            email: user.email
                        }
                    }
                });
            } else res.status(400).json({ success: false, msg: 'Passwordi gabim.' });
        } else res.status(400).json({ success: false, msg: 'Emaili gabim.' });
    } catch (err) {
        const errors = err.errors ? Object.keys(err.errors) : [];
        res.status(400).json({
            success: false,
            msg: 'Diqka shkoi gabim.',
            errors: errors.map(e => err.errors[e].message)
        });
    }
};