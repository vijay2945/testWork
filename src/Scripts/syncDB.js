const sequelize = require('../Models/sequelize'); // Adjust the path accordingly
const userModel = require('../Models/UserModel')
//const User = require('./user.model'); // Adjust the path accordingly

async function syncDB() {
    try {
        await sequelize.sync({ force: true }); // This will recreate the table. Use { force: false } in production
        console.log('Database synchronized successfully');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    } finally {
        await sequelize.close();
    }
}

syncDB()