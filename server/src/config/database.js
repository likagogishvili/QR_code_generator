const Sequelize = require('sequelize');
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + '/./.env' });
const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    dialect: 'mysql',
    host: process.env.DATABASE_HOST
})

module.exports = sequelize