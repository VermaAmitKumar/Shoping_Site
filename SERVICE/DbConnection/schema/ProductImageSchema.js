const Sequelize = require('sequelize');
const { mysql } = require('../DbConnection');
const Category = require('../schema/CategrySchema');
const Product = require('../schema/ProductSchema');

const ProductImage = mysql.define('Tbl_ProductImage', {
    Product_Image_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Image_Name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Product_id: {
        type: Sequelize.INTEGER,
        allowNull: false        
    }   
});

// ProductImage.belongsTo(Product, {foreignKey: 'Product_id'});
// ProductImage.sync({ force: false }).then((res) => {
//     console.log('ProductImage Table Create Succesfully');
// }).catch((err) => {
//     console.log('Error in creating Table', err);
// })
module.exports = ProductImage;

