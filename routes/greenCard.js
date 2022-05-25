const express = require('express');
const router = express.Router();
const {
    get_all_greenCard_history,
    add_greenCard,
    change_greenCard_history,
    delete_greenCard_history
} = require('../controllers/greenCard');
const auth = require('../middleware/auth');

router.route('/greenCard')
    .get(auth,get_all_greenCard_history)
    .post(auth, add_greenCard);

router.route('/greenCard/:id')
    .post(auth, change_greenCard_history)
    .delete(auth, delete_greenCard_history);

module.exports = router;