const Sequelize = require('sequelize');
const { mysql } = require('../DbConnection');
const validator = require('validator');

const RegisterDemo = mysql.define('Tbl_RegisterDemo', {
    Register_Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Register_Name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Country_Id: {
        type: Sequelize.INTEGER,
        allowNull: false        
    },
    State_Id: {
        type: Sequelize.INTEGER,
        allowNull: false        
    },
    City_Id: {
        type: Sequelize.INTEGER,
        allowNull: false        
    },
    Active: {
        type: Sequelize.INTEGER,
        allowNull: false        
    }, 
    Sallery: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    Profile_Picturte: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

// RegisterDemo.sync({ force: false }).then((res) => {
//     console.log('RegisterDemo Create Succesfully');
// }).catch((err) => {
//     console.log('Error in creating Table', err);
// })
/*
ALTER TABLE tbl_registerdemos ADD FOREIGN KEY (Country_Id) REFERENCES countries(id)
ALTER TABLE tbl_registerdemos ADD FOREIGN KEY (State_Id) REFERENCES states(id)
ALTER TABLE tbl_registerdemos ADD FOREIGN KEY (City_Id) REFERENCES cities(id)
*/
module.exports = RegisterDemo;

