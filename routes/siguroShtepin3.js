const express = require('express');
const router = express.Router();
const {
    get_all_siguroShtepin3_history,
    add_siguroShtepin3,
    change_siguroShtepin3_history,
    delete_siguroShtepin3_history
} = require('../controllers/siguroShtepin3');
const auth = require('../middleware/auth');

router.route('/siguroShtepin3')
    .get(auth,get_all_siguroShtepin3_history)
    .post(auth, add_siguroShtepin3);

router.route('/siguroShtepin3/:id')
    .post(auth, change_siguroShtepin3_history)
    .delete(auth, delete_siguroShtepin3_history);

module.exports = router;