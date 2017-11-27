'use strict';
const Expenses = require('../models').Expenses;
const Category = require('../models').Category;
const mongoose = require('mongoose');
const moment = require('moment');

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

var currentDateObj = {year: year, month: month, day: day};

function createCategory(data, req, res){
    console.log(data);
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
}

function checkValidCategory(data, done){
    Category.findOne({type: data.category}, function(err, success){
        if(err) {
            res.json(err)
        } else {
            
        }
    })
}

exports.addExpenses = function(req, res){
    var data = req.body;
    checkValidCategory(data, function(){
        if(err) {
            res.json(err);
        } else {
            createCategory(data, req, res);
        }
    });
};

exports.listExpenses = function(req, res){
    var data = req.body;
    var query = {};
    var groupBy = req.query.groupBy;
    var query = {}
    if(groupBy){
        query = {
            createdAt: {
                $gte: new Date(yearStart, monthStart, dateStart), 
                $lt: new Date(yearEnd, monthEnd, dateEnd)
            }
        }
    }
    Expenses.find(query, function(err, success){
        if(err) {
            res.json(err);
        } else {
            res.json(success);
        }
    });
}