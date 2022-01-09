const pool = require('../util/database');
const Order = require('../models/order');




exports.postOrder = (req,res) => {
    res.set({
        'Access-Control-Allow-Origin' : "*",
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE',
        'Access-Control-Allow-Headers' : 'Content-Type'
    })
    const cartItems = req.body.cartItem;
    console.log(cartItems);


    Order.create({
        
        name : cartItems[0].name,
        email : 'saidhakshin@gmail',
        phone : 44454444,
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
    console.log(req.user);
    
   res.send('successful');


    
}
