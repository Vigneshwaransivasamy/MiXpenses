var express = require('express');

var bodyParser = require('body-parser');

var database = require('./db');

var app = express();

var user = require('./routes/user');

var expenses = require('./routes/expenses');

var category = require('./routes/category');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Server is up and running');
});

app.use('/user', user);

app.use('/expenses', expenses);

app.use('/category', category);

app.listen(3000);