const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Adjust the path accordingly

const User = sequelize.define('User', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
    modelName: 'User', // Make sure it's singular to match your table name
    tableName: 'users', // Specify your desired table name
});

module.exports = User;
