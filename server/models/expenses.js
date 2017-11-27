var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ExpensesSchema = module.exports = new Schema({
    title: {
        type: String,
        required: true
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    amount: {
        type: Number,
        min: 1,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    createAt: { type: Date, default: Date.now }
})

// module.exports = mongoose.model('User', ExpensesSchema);