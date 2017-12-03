const mongoose = require('mongoose');
const User = require('./user');
const Transaction = require('./transaction');
const Categories = require('./categories');
const Bitlink = require('./bitlink');
const bcrypt = require('bcrypt');

User.methods.checkPassword = function(password){
  return bcrypt.compareSync(password, this.passwordHash);
}

exports.User = mongoose.model('User', User);

exports.Transaction = mongoose.model('Transaction', Transaction);

exports.Categories = mongoose.model('Categories', Categories);

exports.Bitlink = mongoose.model('Bitlink', Bitlink);
