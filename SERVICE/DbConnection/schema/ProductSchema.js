const Sequelize = require('sequelize');
const { mysql } = require('../DbConnection');
const Category = require('../schema/CategrySchema');

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
    Cid: {
        type: Sequelize.INTEGER,
        allowNull: false        
    },    
    active: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0
    }
});

Product.belongsTo(Category, {foreignKey: 'Cid'});

Product.sync({ force: false }).then((res) => {
    console.log('Product Table Create Succesfully');
}).catch((err) => {
    console.log('Error in creating Table', err);
})
module.exports = Product;

