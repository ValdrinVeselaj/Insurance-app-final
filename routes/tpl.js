const express = require('express');
const router = express.Router();
const {
    get_all_tpl_history,
    add_tpl,
    change_tpl_history,
    delete_tpl_history
} = require('../controllers/tpl');
const auth = require('../middleware/auth');

router.route('/tpl')
    .get(auth, get_all_tpl_history)
    .post(auth, add_tpl);

router.route('/tpl/:id')
    .post(auth, change_tpl_history)
    .delete(auth, delete_tpl_history);

module.exports = router;