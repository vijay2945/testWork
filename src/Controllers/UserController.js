
//const userModel = require('../Models/UserModel')
const bcrypt = require('bcrypt')

const jwt= require("jsonwebtoken")
//const {isValidEmail,isValidString,isValidPassword} = require("../validator/validator");

//const mongoose = require('mongoose')

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'vijayDB45',
    password: '#BMW@010',
    database: 'test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const User = require('../Models/UserModel'); // Adjust the path accordingly

const createUser = async function (req, res) {
    try {
        let { firstname, lastname, email, phone, password } = req.body;

        if (!firstname || !lastname || !email || !phone || !password) {
            return res.status(400).send({ msg: "Please enter all details" });
        }
        password = await bcrypt.hash(password, 10)

        // Use Sequelize's create method to insert a new user
        const newUser = await User.create({
            firstname,
            lastname,
            email,
            phone,
            password,
        });

        return res.status(201).send({ status: true, message: "Success", data: { userId: newUser.id } });

    } catch (error) {
        console.error(error);
        res.status(500).send({ status: false, message: error.message });
    }
};



const login = async function (req, res) {
    try {
        const data = req.body;
        if (!Object.keys(data).length || !data.email || !data.password) {
            return res.status(400).send({ status: false, message: "Please provide email and password (they are mandatory)" });
        }

        const { email, password } = data;

        // Use Sequelize's findOne method to find a user by email
        const userData = await User.findOne({ where: { email } });
console.log(userData)
        if (!userData) {
            return res.status(404).send({ status: false, message: "Please provide valid email" });
        } else {
            const validPassword = await bcrypt.compare(password, userData.password);
            if (!validPassword) return res.status(400).send({ status: false, message: "Invalid Password" });
        }

        const token = jwt.sign({ userId: userData.id }, "Tekhnologiya", { expiresIn: '12hr' });

        const tokenData = {
            userId: userData.id,
            token: token
        };

        return res.status(200).send({ status: true, message: "User login successful", data: tokenData });

    } catch (err) {
        console.error(err);
        return res.status(500).send({ status: false, message: err.message });
    }
};


module.exports={createUser,login}