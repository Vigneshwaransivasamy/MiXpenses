var express = require('express');

var categoryController = require('../controller/category');

var router = express.Router();

router.post('/add', categoryController.addCategory)

module.exports = router;