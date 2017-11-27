const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
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
