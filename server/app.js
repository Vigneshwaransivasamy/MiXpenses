var express = require('express');

var bodyParser = require('body-parser');

var database = require('./db');

var jwt = require('jsonwebtoken');

var app = express();

var user = require('./routes/user');

var transaction = require('./routes/transaction');

var categories = require('./routes/categories');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Server is up and running');
});

app.use(function(req, res, next){
    if(
        req.headers && 
        req.headers.authorization && 
        req.headers.authorization.split(' ')[0] === 'JWT'){
            let token = req.headers.authorization.split(' ')[1];
            jwt.verify(token, 'extremlyprivate', function(err, decode){
                if(err){
                    req.user = null
                }
                req.user = decode;
                next();
            })
    } else {
        req.user = null;
        next();
    }
    console.log('User', req.user)
})

app.use('/user', user);

// app.use('/transaction', transaction);

app.use('/categories', categories);

app.listen(8080);