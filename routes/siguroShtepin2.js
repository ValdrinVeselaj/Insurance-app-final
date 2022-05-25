const express = require('express');
const router = express.Router();
const {
    get_all_siguroShtepin2_history,
    add_siguroShtepin2,
    change_siguroShtepin2_history,
    delete_siguroShtepin2_history
} = require('../controllers/siguroShtepin2');
const auth = require('../middleware/auth');

router.route('/siguroShtepin2')
    .get(auth,get_all_siguroShtepin2_history)
    .post(auth, add_siguroShtepin2);

router.route('/siguroShtepin2/:id')
    .post(auth, change_siguroShtepin2_history)
    .delete(auth, delete_siguroShtepin2_history);

module.exports = router;