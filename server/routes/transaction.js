var express = require('express');

var transactionController = require('../controller/transaction');

var router = express.Router();

router.post('/:userId', transactionController.addTransaction);

router.get('/:userId', transactionController.getTransactionsOfUser);

router.get('/:userId/:id', transactionController.getTransactionOfUserById);

router.delete('/:userId/:id', transactionController.removeTransactionOfUserById);

router.put('/:userId/:id', transactionController.updateTransactionById);

module.exports = router;