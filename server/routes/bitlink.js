var express = require('express');

var bitlinkController = require('../controller/bitlink');

var router = express.Router();

router.post('/create', bitlinkController.createBitlink);

router.get('/:id', bitlinkController.redirectById);

module.exports = router;