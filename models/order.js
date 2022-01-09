const Sequelize = require('sequelize');

const sequelize = require('../util/sequelize');

const Order = sequelize.define('order',{
    id  : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        
    },
    name : Sequelize.STRING,
    email : Sequelize.STRING,
    phone : Sequelize.INTEGER
})

module.exports = Order;