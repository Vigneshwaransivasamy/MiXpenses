const Expenses = require('../models').Expenses;

exports.addExpenses = function(req, res){
    var data = req.body;
    Expenses.create({
        title:data.title, 
        amount: data.amount,
        category: data.category,
        note: data.note
    },function(err, success){
        if(err) {
            res.json(err);
        } else {
            res.json({data: data, success: true});        
        }
    }); 
};