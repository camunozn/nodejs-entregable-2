const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Todo = db.define('todos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'complete'),
    allowNull: false,
  },
});

module.exports = Todo;
