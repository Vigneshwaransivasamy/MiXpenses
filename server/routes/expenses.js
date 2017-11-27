var express = require('express');

var expensesModal = require('../models/Expenses');

var expensesController = require('../controller/Expenses');

var router = express.Router();

router.get('/', function(){
    console.log('Yet to implement');
})

module.exports = router;