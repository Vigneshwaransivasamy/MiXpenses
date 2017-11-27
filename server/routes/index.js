var express = require('express');

var userModal = require('../models/User');

var userController = require('../controller/User');

var router = express.Router();

router.get('/index', function(req, res){
    res.send('Yet to implement');
})

module.exports = router;