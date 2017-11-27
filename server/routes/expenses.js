var express = require('express');

var expensesController = require('../controller/expenses');

var router = express.Router();

router.post('/add', expensesController.addExpenses);

router.get('/list', expensesController.listExpenses);

module.exports = router;