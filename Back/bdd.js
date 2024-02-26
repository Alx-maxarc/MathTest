
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mathtest', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
