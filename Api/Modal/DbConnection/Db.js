'user strict';
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    port     :  3306,
    password : 'root',
    database  : 'db_shoping',
    insecureAuth : true
});

connection.connect(function(err) {
    // console.log("connected");
    if (err) throw err;
});

module.exports = connection;

