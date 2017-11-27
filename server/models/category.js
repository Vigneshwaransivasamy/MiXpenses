var mongoose = require('mongoose');

var Schema = mongoose.Schema

var CategorySchema = module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
});

// module.exports = mongoose.model('Category', CategorySchema);