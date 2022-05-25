const express = require('express');
const router = express.Router();
const {
    get_all_siguroShtepin1_history,
    add_siguroShtepin1,
    change_siguroShtepin1_history,
    delete_siguroShtepin1_history
} = require('../controllers/siguroShtepin1');
const auth = require('../middleware/auth');

router.route('/siguroShtepin1')
    .get(auth,get_all_siguroShtepin1_history)
    .post(auth, add_siguroShtepin1);

router.route('/siguroShtepin1/:id')
    .post(auth, change_siguroShtepin1_history)
    .delete(auth, delete_siguroShtepin1_history);

module.exports = router;