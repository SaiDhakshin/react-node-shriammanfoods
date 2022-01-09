const Sequelize = require('sequelize');

const sequelize = require('../util/sequelize');

const CartItem = sequelize.define('cartItem',{
    id  : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        allowNull : false,
        
    },
    cart_id  : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        allowNull : false,
        
    },
    product : {
        type : Sequelize.STRING,
    },
    quantity : {
        type : Sequelize.INTEGER,
    }
    
})

module.exports = CartItem;