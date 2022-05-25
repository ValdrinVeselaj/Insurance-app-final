const express = require('express');
const router = express.Router();
const {
    get_all_siguroUdhetimin_history,
    add_siguroUdhetimin,
    change_siguroUdhetimin_history,
    delete_siguroUdhetimin_history
} = require('../controllers/siguroUdhetimin');
const auth = require('../middleware/auth');

router.route('/siguroUdhetimin')
    .get(auth, get_all_siguroUdhetimin_history)
    .post(auth, add_siguroUdhetimin);

router.route('/siguroUdhetimin/:id')
    .post(auth, change_siguroUdhetimin_history)
    .delete(auth, delete_siguroUdhetimin_history);

module.exports = router;