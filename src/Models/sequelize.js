// sequelize.js

const { Sequelize } = require('sequelize');

// Replace these with your actual database credentials
const database = 'test';
const username = 'vijayDB45';
const password = '#BMW@010';

const sequelize = new Sequelize(database, username, password, {
  host: 'localhost', // Replace with your database host
  dialect: 'mysql',   // Replace with your database dialect (e.g., 'mysql', 'postgres', 'sqlite')
  logging: false,     // Set to true if you want to see SQL queries in the console
});

module.exports = sequelize;