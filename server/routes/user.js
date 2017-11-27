var express = require('express');
var userController = require('../controller/user');

var router = express.Router();

router.post('/register', userController.register);
router.post('/deleteAccount', userController.unRegister);

router.post('/login', userController.login);

module.exports = router;