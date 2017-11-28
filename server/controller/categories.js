const Categories = require('../models').Categories;

exports.addCategory = function(req, res){
    var data = req.body;
    var id = req.params.id;
    var userId = req.params.userId || req.body.userId;
    let _data = Object.assign({}, data, {userId: userId});
    Categories.create(_data,function(err, success){
        if(err) {
            res.json(err);
        } else {
            res.json({data: data, success: true});        
        }
    }); 
};

exports.getCategoriesOfUser = function(req, res){
    var userId = req.params.userId || req.body.userId;
    Categories.find({userId: userId}, function(err, success){
        if(err) {
            res.json(err)
        } else {
            res.json(success)
        }
    })
};

exports.getCategoryOfUserById = function(req, res){
    var data = req.body;
    var id = req.params.id;
    var userId = req.params.userId || req.body.userId;
    Categories.findOne({_id: id, userId, userId}, function(err, success){
        if(err) {
            res.json(err)
        } else {
            res.json(success)
        }
    })
};

exports.removeCategoryOfUserById = function(req, res){
    var data = req.body;
    var id = req.params.id;
    var userId = req.params.userId || req.body.userId;
    Categories.remove({_id: id, userId, userId}, function(err, success){
        if(err) {
            res.json(err)
        } else {
            res.json(success)
        }
    })
};

exports.updateCategoryOfUserById = function(req, res){
    var data = req.body;
    var id = req.params.id;
    var userId = req.params.userId || req.body.userId;
    let _data = Object.assign({}, data, {userId: userId});
    Categories.findOneAndUpdate({_id: id, userId, userId}, _data, {new: true}, function(err, success){
        if(err) {
            res.json(err)
        } else {
            res.json(success)
        }
    })
};
