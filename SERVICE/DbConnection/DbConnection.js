const Sequelize = require('sequelize');
const Opation = Sequelize.Op;

exports.mysql = new Sequelize('db_shoping', 'root', 'root', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    operatorsAliases: Opation,
});

if (exports.mysql) {
    console.log("connected");
}