var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ExpensesSchema = module.exports = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String, 
        required: true
    },
    amount: {
        type: Number,
        min: 1,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    createdAt: { type: Date, default: Date.now }
});