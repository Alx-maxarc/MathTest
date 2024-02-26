// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../bdd');  // Importez votre instance Sequelize

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pts: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = User;
