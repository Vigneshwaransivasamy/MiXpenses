var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.ObjectId;

module.exports = new Schema({

    title: { type: String,required: true },

    category: { type: ObjectId, ref: 'Categories', required: true},

    userId: { type: ObjectId, ref: 'User', required: true },

    amount: { type: Number, min: 1, required: true },

    note: { type: String },

    // type: {
    //     type: String,
    //     enum: ['credit', 'debit']
    // },

    transferedAt: { type: Date, default: Date.now },

    // createdAt: { type: Date, default: Date.now },

    updatedAt: { type: Date }
});