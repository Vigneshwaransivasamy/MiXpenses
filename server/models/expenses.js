var mongoose = require('mongoose');

var Expenses = new mongoose.Schema({
    title: {
        type: String,
        category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
        amount: {
            type: Number,
            min: 1,
            required: true
        },
        note: {
            type: String,
            required: true
        }
    }
})

module.exports = Expenses;