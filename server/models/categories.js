var mongoose = require('mongoose');

var Schema = mongoose.Schema

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
});