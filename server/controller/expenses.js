'use strict';
const Expenses = require('../models').Expenses;
const Category = require('../models').Category;
const mongoose = require('mongoose');
const moment = require('moment');

// var dateObj = new Date();
// var month = dateObj.getUTCMonth() + 1; //months from 1-12
// var day = dateObj.getUTCDate();
// var year = dateObj.getUTCFullYear();

// var currentDateObj = {year: year, month: month, day: day};

function groupExpenses(listOfExpenses, groupBy){
    var currentDay = moment.utc().startOf('day');
    var addOffset = function(offset){

    }
    var addRoom = function(){
        group.push([])
    }
    var group = [];
    listOfExpenses.map(function(expenses){
        if(currentDay > expenses.createdAt){
            if(!group.length > 0) addRoom();
            group[group.length-1].push(expenses);
        } else {

        }
    })
}

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

function checkValidCategory(data, req, res){
    Category.findOne({type: data.category}, function(err, success){
        if(err) {
            res.json(err)
        } else {
            createCategory(data, req, res);
        }
    })
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