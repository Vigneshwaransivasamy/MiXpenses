const mongoose = require('mongoose');
const User = require('./user');
const Expenses = require('./expenses');
const Category = require('./category');

exports.User = mongoose.model('User', User);

exports.Expenses = mongoose.model('Expenses', Expenses);

exports.Category = mongoose.model('Category', Category);
