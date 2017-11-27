'use strict';
const Transaction = require('../models').Transaction;
const Categories = require('../models').Categories;
const mongoose = require('mongoose');
const moment = require('moment');


function createCategory(data, req, res){
    console.log(data);
    Transaction.create({
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
}

exports.addExpenses = function(req, res){
    var data = req.body;
    checkValidCategory(data, req, res);
};

exports.listExpenses = function(req, res){
    var data = req.body;
    var query = {};
    var groupBy = req.query.groupBy;
    var query = {}
    Expenses.find(query,null, {sort: {date: -1}}, function(err, success){
        if(err) {
            res.json(err);
        } else {
            res.json(groupExpenses(success, groupBy));
        }
    });
}