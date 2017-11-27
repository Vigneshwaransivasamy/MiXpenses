const Category = require('../models').Category;

exports.addCategory = function(req, res){
    var data = req.body;
    Category.create({
        name: data.name
    },function(err, success){
        if(err) {
            res.json(err);
        } else {
            res.json({data: data, success: true});        
        }
    }); 
};