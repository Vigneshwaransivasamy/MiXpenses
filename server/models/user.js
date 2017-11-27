var mongoose = require('mongoose');

var User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Expenses' }]
})

module.exports = User;