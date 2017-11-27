var mongoose = require('mongoose');

var databaseUrl = 'mongodb://localhost:27017/miexpenses';

var connection = mongoose.connect(
    databaseUrl,
    {useMongoClient: true}
);

connection.on('error', function(){
    console.log("Database Connection Error!")
});

module.exports = connection;