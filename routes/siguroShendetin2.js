const express = require('express');
const router = express.Router();
const {
    get_all_siguroShendetin2_history,
    add_siguroShendetin2,
    change_siguroShendetin2_history,
    delete_siguroShendetin2_history
} = require('../controllers/siguroShendetin2');
const auth = require('../middleware/auth');

router.route('/siguroShendetin2')
    .get(auth,get_all_siguroShendetin2_history)
    .post(auth, add_siguroShendetin2);

router.route('/siguroShendetin2/:id')
    .post(auth, change_siguroShendetin2_history)
    .delete(auth, delete_siguroShendetin2_history);

module.exports = router;