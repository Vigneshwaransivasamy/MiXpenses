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
    expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Expenses', default: []}]
});
