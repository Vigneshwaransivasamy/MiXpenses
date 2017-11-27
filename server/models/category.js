var mongoose = require('mongoose');

var Category = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
})

module.exports = Category;