const express = require('express');
const router = express.Router();
const userCtrl = require('../Controller/user');
const auth = require('../middlewear/auth')


router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/user/:username', auth, userCtrl.user)


module.exports = router;