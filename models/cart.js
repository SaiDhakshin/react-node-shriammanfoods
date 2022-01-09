const Sequelize = require('sequelize');

const sequelize = require('../util/sequelize');

const Cart = sequelize.define('cart',{
    id  : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        allowNull : false,
        
    },
    user_id : {
        type : Sequelize.INTEGER,
        allowNull : false,
    }
})

module.exports = Order;