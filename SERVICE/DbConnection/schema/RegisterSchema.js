const Sequelize = require('sequelize');
const { mysql } = require('../DbConnection');
const validator = require('validator');

const Register = mysql.define('Tbl_Register', {
    Register_Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Register_Name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Role: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Phone_Number: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
    },
       
    active: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0
    }
});

// Register.sync({ force: false }).then((res) => {
//     // console.log('Table Create Succesfully');
// }).catch((err) => {
//     console.log('Error in creating Table', err);
// })
module.exports = Register;

