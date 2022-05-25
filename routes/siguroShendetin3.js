const express = require('express');
const router = express.Router();
const {
    get_all_siguroShendetin3_history,
    add_siguroShendetin3,
    change_siguroShendetin3_history,
    delete_siguroShendetin3_history
} = require('../controllers/siguroShendetin3');
const auth = require('../middleware/auth');

router.route('/siguroShendetin3')
    .get(auth,get_all_siguroShendetin3_history)
    .post(auth, add_siguroShendetin3);

router.route('/siguroShendetin3/:id')
    .post(auth, change_siguroShendetin3_history)
    .delete(auth, delete_siguroShendetin3_history);

module.exports = router;