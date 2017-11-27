var express = require('express');
var userController = require('../controller/user');

var router = express.Router();

router.post('/add', userController.addUser);

module.exports = router;