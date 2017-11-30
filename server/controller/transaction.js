'use strict';
const Transaction = require('../models').Transaction
const Categories = require('../models').Categories
const mongoose = require('mongoose')
const moment = require('moment')

/**
 * {
    "title": "test data",
    "category": "5a1cd59da66d367863b2d099",
    "userId": "",
    "amount": 40,
    "note": "test",
    "userId": "5a1c43dce4dd8e3b351d1d1c"
}
 */

exports.addTransaction = function(req, res){
    var data = req.body;
    var userId = req.params.userId || req.body.userId;
    let _data = Object.assign({}, data, {userId: userId});
    Transaction.create(data,function(err, success){
        if(err) {
            res.json(err);
        } else {
            res.json({data: data, success: true});        
        }
    }); 
}

exports.getTransactionsOfUser = function(req, res){
    var data = req.body;
    var params = req.body.params
    var id = data.id;
    if(params && params.groupBy){
        Transaction.aggregate([
            {
                $match: {
                userId: new mongoose.Types.ObjectId(id),
                transferedAt: {
                    '$gte':  moment().dayOfYear(1).toDate(),
                    '$lt': moment().dayOfYear(366).toDate()
                }
                }
            },
            {
                $group: {
                    _id: {
                        month: {
                            $month: "$transferedAt"
                        },
                        year: {
                            $year: "$transferedAt"
                        },
                        day: {
                            $dayOfMonth: "$transferedAt"
                        }
                    },
                    totalAmount: {
                        $sum: "$amount"
                    }
                }
            }
        ], function(err, records){
            if(err) throw new Error(err);
            res.json({
              success: true,
              data: records
            });
        }); 
    } else {
        Transaction.find({}, function(err, records){
            if(err) throw new Error(err);
            res.json({
              success: true,
              data: records
            });
        });
    }
}

exports.getTransactionOfUserById = function(req, res){
    var data = req.body;
    var id = req.params.id;
    var userId = req.params.userId || req.body.userId;
    let _data = Object.assign({}, data, {userId: userId});
    Transaction.findOne({userId: userId, _id: id}, function(err, records){
        if(err) throw new Error(err);
        res.json({
          success: true,
          data: records
        });
    });
}

exports.removeTransactionOfUserById = function(req, res){
    var data = req.body;
    var id = req.params.id;
    var userId = req.params.userId || req.body.userId;
    let _data = Object.assign({}, data, {userId: userId});
    Transaction.remove({userId: userId, _id: id}, function(err, records){
        if(err) throw new Error(err);
        res.json({
          success: true,
          data: records
        });
    });
}

exports.updateTransactionById = function(req, res){
    var data = req.body;
    var id = req.params.id;
    var userId = req.params.userId || req.body.userId;
    let _data = Object.assign({}, data, {userId: userId});
    Transaction.findOneAndUpdate({userId: userId, _id: id}, updatedContent, {new: true}, function(err, records){
        if(err) throw new Error(err);
        res.json({
          success: true,
          data: records
        });
    });
}