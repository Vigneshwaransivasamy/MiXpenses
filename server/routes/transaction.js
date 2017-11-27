var express = require('express');

var transactionController = require('../controller/transaction');

var router = express.Router();

router.post('/add', transactionController.addExpenses);

router.get('/list', transactionController.listExpenses);

module.exports = router;