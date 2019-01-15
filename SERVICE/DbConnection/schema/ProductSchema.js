const Sequelize = require('sequelize');
const { mysql } = require('../DbConnection');
const Category = require('../schema/CategrySchema');
const Sub_Category = require('../schema/SubCategory');

const Product = mysql.define('Tbl_Product', {
    Product_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    product_Name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Category_id: {
        type: Sequelize.INTEGER,
        allowNull: false        
    },
    Sub_Category_Id: {
        type: Sequelize.INTEGER,
        allowNull: false        
    },
    Prize: {
        type: Sequelize.INTEGER,
        allowNull: false        
    },
    qty: {
        type: Sequelize.INTEGER,
        allowNull: false        
    },    
    active: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0
    }
});

Product.belongsTo(Category, {foreignKey: 'Category_id'});
Product.belongsTo(Sub_Category, {foreignKey: 'Sub_Category_Id'});
// Product.sync({ force: false }).then((res) => {
//     // console.log('Product Table Create Succesfully');
// }).catch((err) => {
//     console.log('Error in creating Table', err);
// })
module.exports = Product;

