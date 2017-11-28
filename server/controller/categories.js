const Categories = require('../models').Categories;

exports.addCategory = function(req, res){
    var data = req.body;
    Categories.create(data,function(err, success){
        if(err) {
            res.json(err);
        } else {
            res.json({data: data, success: true});        
        }
    }); 
};

exports.getCategories = function(req, res){
    var data = req.body;
    console.log(req.user);
    Categories.find({}, function(err, success){
        if(err) {
            res.json(err)
        } else {
            res.json(success)
        }
    })
};

exports.getCategoryById = function(req, res){
    var id = req.params.id;
    Categories.findOne({_id: id}, function(err, success){
        if(err) {
            res.json(err)
        } else {
            res.json(success)
        }
    })
};

exports.removeCategoryById = function(req, res){
    var id = req.params.id;
    Categories.remove({_id: id}, function(err, success){
        if(err) {
            res.json(err)
        } else {
            res.json(success)
        }
    })
};

exports.updateCategoryById = function(req, res){
    var id = req.params.id;
    var updateContent = req.body
    Categories.findOneAndUpdate({_id: id}, updateContent, {new: true}, function(err, success){
        if(err) {
            res.json(err)
        } else {
            res.json(success)
        }
    })
};
