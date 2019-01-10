const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
port = process.env.PORT || 3000;


const mysql = require('mysql');
// connection configurations
const MySqlconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port : 3306,
    password: 'root',
    database: 'db_shoping'
});

//password
// connect to database
MySqlconnection.connect(function(err) {
    if (err) throw err;
    console.log("----------------Connected!--------------");
});

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./Route/CategoryRoutes'); //importing route
routes(app); //register the route