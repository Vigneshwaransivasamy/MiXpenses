
const User = require('../models').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = function(req, res){
    var data = req.body;
    var payload = Object.assign({}, data, {passwordHash:bcrypt.hashSync(data.password,10)})
    User.create(payload,function(err, success){
        if(err) {
            res.status(400).json(err);
        } else {
            delete data.password;
            res.json({data: data, success: true});        
        }
    }); 
}

exports.deleteAccount = function(req, res){
    var data = req.body;
    User.remove({email: data.email},function(err, success){
        if(err) {
            res.status(400).json(err);
        } else {
            res.json({data: data, success: true});        
        }
    }); 
}

exports.login = function(req, res){
    var data = req.body;
    User.findOne({email: data.email}, function(err, success){
        if(err) {
            res.status(400).json(err);
        } else {
            console.log('Success', success)
            res.json({token: jwt.sign({
                email: success.email,
                name: success.name,
                _id: success._id
            },'extremlyprivate')})
        }
    })
}
