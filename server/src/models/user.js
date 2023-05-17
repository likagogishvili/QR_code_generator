const Sequelize = require('sequelize')
const sequelize = require('../config/database')
const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validateUniquenessAtSequelizeLevel: true
    },
    position: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    company: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'National Statistics Office Of Georgia',
    },
    website: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'www.geostat.ge',
    },
}, {})

module.exports = User