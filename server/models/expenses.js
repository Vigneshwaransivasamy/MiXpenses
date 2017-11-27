var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ExpensesSchema = module.exports = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category', 
        required: true
    },
    amount: {
        type: Number,
        min: 1,
        required: true
    },
    note: {
        type: String,
        default: ""
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
});