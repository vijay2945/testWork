const express = require('express');
const router = express.Router();
const UserController = require("../Controllers/UserController");

//const MW = require("../middlewere/auth");


router.post('/users',UserController.createUser);
router.post("/login", UserController.login);



module.exports = router;




