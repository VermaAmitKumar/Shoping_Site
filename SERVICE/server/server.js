const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());

var mysql = require('mysql2');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    port:3306,
    database : 'db_shoping'
});

const port = process.env.PORT || 5000;

app.get('/',(req, res)=> {
    connection.connect(function(err) {
        res.send("connected");
        if (err) throw err;
        connection.query("SELECT * FROM tbl_Category", function (err, result, fields) {
          if (err) throw err;
          res.send(JSON.stringify(result,undefined,2));
        });
      });
      res.send("connected2");    
})
app.listen(3000,function(){
    console.log('Example app listening on port ' + port + '!');
});