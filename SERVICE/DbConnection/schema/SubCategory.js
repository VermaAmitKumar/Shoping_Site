const Sequelize = require('sequelize');
const { mysql } = require('../DbConnection');
const validator = require('validator');
const Category = require('../schema/CategrySchema');

const Sub_Category = mysql.define('tbl_Sub_Category', {
    Sub_Category_Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Sub_Category_Name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Category_id: {
        type: Sequelize.INTEGER
    },
    active: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0
    }
});

Sub_Category.belongsTo(Category, {foreignKey: 'Category_id'});

// Sub_Category.sync({ force: false }).then((res) => {
//     // console.log(' Sub_Category Table Create Succesfully');
// }).catch((err) => {
//     console.log('Error in creating Table', err);
// })

module.exports = Sub_Category;

