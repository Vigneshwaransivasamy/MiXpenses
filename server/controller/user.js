const User = require('../models').User;

exports.addUser = function(req, res){
    var data = req.body;
    User.create({name:data.name, email: data.email},function(err, success){
        if(err) {
            res.json(err);
        } else {
            res.json({data: data, success: true});        
        }
    }); 
}