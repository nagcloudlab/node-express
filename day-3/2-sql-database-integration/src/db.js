
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb', 'postgres', 'postgres', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres'
});

module.exports = sequelize;

