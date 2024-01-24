const express = require('express');
const route = require('./Routes/route');
const { Sequelize } = require('sequelize');

const app = express();

app.use(express.json());

// Create a Sequelize instance and connect to MySQL
const sequelize = new Sequelize('test', 'vijayDB45', '#BMW@010', {
    host: 'localhost', // Change this to your MySQL server host
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => console.log('MySQL database connected'))
    .catch(err => console.error('Error connecting to MySQL:', err));

// Import your Sequelize model
const userModel = require('./Models/UserModel'); // Adjust the path accordingly

// Define associations or any other Sequelize configurations if needed

// Sync Sequelize models with the database
sequelize.sync({ force: true }) // This will recreate the tables. Use { force: false } in production
    .then(() => console.log('Sequelize models synchronized successfully'))
    .catch(err => console.error('Error synchronizing Sequelize models:', err));

app.use('/', route);

app.listen(3000, function () {
    console.log('Express app running on port ' + 3000);
});

