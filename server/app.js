var express = require('express');

var bodyParser = require('body-parser');

var database = require('./db');

var app = express();

var user = require('./routes/user');

var expenses = require('./routes/expenses');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
    res.send('Server is up and running');
});

app.get('/user', user);

app.get('/expenses', expenses);

app.listen(3000);