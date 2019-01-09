
var mysql = require('mysql2');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'db_shoping'
});
// connection.connect(function(err) {
//      if (err) throw err;
//         connection.query("SELECT * FROM tbl_Category", function (err, result, fields) {
//           if (err) throw err;
//           console.log(JSON.stringify(result,undefined,2));
//         });
// });

module.exports={
    connection
}
