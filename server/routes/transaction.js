var express = require('express');

var transactionController = require('../controller/transaction');

var router = express.Router();

router.post('/', transactionController.addTransaction);

router.get('/', transactionController.getTransactionsByGroup);

module.exports = router;