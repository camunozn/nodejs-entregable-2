const { Sequelize } = require('sequelize');

const db = new Sequelize({
  database: 'todos_app',
  port: 5432,
  host: 'localhost',
  username: 'camunozn',
  password: 'root',
  dialect: 'postgres',
});

module.exports = db;
