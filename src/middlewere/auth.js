// const jwt = require("jsonwebtoken");
// const { User } = require("../models/user.model"); // Adjust the path accordingly

// const authenticate = async function (req, res, next) {
//     try {
//         let token = req.headers["x-api-key"];
//         if (!token) {
//             return res.status(400).send({ status: false, message: "No token found" });
//         }

//         jwt.verify(token, "Tekhnologiya", async function (err, decodedToken) {
//             if (err) {
//                 return res.status(401).send({ status: false, message: err.message });
//             }

//             // Retrieve user details from the database using Sequelize
//             const user = await User.findOne({ where: { id: decodedToken.userId } });

//             if (!user) {
//                 return res.status(401).send({ status: false, message: "User not found" });
//             }

//             // Attach user details to the request for future use in the route
//             req.user = user;
//             console.log(decodedToken);
//             next();
//         });
//     } catch (err) {
//         return res.status(500).send({ status: false, message: err.message });
//     }
// };

// module.exports = { authenticate };
