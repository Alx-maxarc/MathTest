const express = require('express');
const router = express.Router();
const ptsCtrl = require('../Controller/pts')
const auth = require('../middlewear/auth')


router.post('/1/:username', auth, ptsCtrl.one);
router.post('/10/:username', auth, ptsCtrl.ten);
router.post('/100/:username', auth, ptsCtrl.hundred);


module.exports = router;
