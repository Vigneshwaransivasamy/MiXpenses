var express = require('express');

// Json Payload handler

var bodyParser = require('body-parser');

// Form Data / Files Payload handler

var multer = require('multer');

var database = require('./db');

var jwt = require('jsonwebtoken');

var app = express();

var upload = multer();


// Routes to different module

var user = require('./routes/user');

var transaction = require('./routes/transaction');

var categories = require('./routes/categories');

var bitLink = require('./routes/bitlink');


// Body Parser Middleware

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());


// Access Control Middleware

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



// Authentication Middleware

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
});
    
app.use('/user', upload.array(), user);

app.use('/transaction', upload.array(), transaction);

app.use('/categories', upload.array(), categories);

app.use('/bitlink', upload.array(), bitLink);

app.get('/', function(req, res){
    res.send('Server is up and running');
});

app.listen(8080);

process.on('uncaughtException',function(e){
    console.log(e);
})