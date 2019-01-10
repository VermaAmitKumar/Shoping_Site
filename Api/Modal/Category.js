'user strict';
var sql = require('./DbConnection/Db');

var Category = (Category)=>{
    this.Category_Name = Category.Category_Name;
}

Category.getAllCategory = function getAllCategory(result) {
    sql.query("Select * from tbl_category", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('tasks : ', res);
            result(null, res);
        }
    });
};
module.exports= Category;