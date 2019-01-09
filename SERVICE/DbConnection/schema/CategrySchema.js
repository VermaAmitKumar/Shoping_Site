var {mysql} = require('mysql2');
var connection= require('../DbConnection');

var Category = mysql.define('tbl_Category',{
    Category_id :{
        type:Number
    },Category_Name:{
        type:string
    }    
});

Category.sync({ force: false }).then((res) => {
    console.log('Table sucessfully created');
}).catch((err) => {
    console.log('Error in creating Table', err);
})

// module.exports={
//     Category
// }
