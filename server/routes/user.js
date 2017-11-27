var express = require('express');

var userModal = require('../models/User');

var userController = require('../controller/user');

var router = express.Router();

router.get('/add', userController.addUser);

module.exports = router;