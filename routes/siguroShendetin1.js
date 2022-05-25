const express = require('express');
const router = express.Router();
const {
    get_all_siguroShendetin1_history,
    add_siguroShendetin1,
    change_siguroShendetin1_history,
    delete_siguroShendetin1_history
} = require('../controllers/siguroShendetin1');
const auth = require('../middleware/auth');

router.route('/siguroShendetin1')
    .get(auth,get_all_siguroShendetin1_history)
    .post(auth, add_siguroShendetin1);

router.route('/siguroShendetin1/:id')
    .post(auth, change_siguroShendetin1_history)
    .delete(auth, delete_siguroShendetin1_history);

module.exports = router;