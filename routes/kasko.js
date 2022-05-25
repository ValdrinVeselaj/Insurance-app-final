const express = require('express');
const router = express.Router();
const {
    get_all_kasko_history,
    add_kasko,
    change_kasko_history,
    delete_kasko_history
} = require('../controllers/kasko');
const auth = require('../middleware/auth');

router.route('/kasko')
    .get(auth,get_all_kasko_history)
    .post(auth, add_kasko);

router.route('/kasko/:id')
    .post(auth, change_kasko_history)
    .delete(auth, delete_kasko_history);

module.exports = router;