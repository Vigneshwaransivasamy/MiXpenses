var mongoose = require('mongoose');

var Schema = mongoose.Schema

var Bitlink = new Schema({
    link: {
        type: String,
        required: true,
        index: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    expiresAt: {
        type: Date
    }
});

Bitlink.methods.isValid = function(){
  console.log('new Date().getTime() < this.expiresAt',new Date().getTime(), new Date(this.expiresAt).getTime())
  return (new Date().getTime() < new Date(this.expiresAt).getTime());
}

module.exports = Bitlink