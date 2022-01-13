const pool = require('../util/database');
const Order = require('../models/order');
const nodemailer = require('nodemailer');




exports.postOrder = (req,res) => {
    res.set({
        'Access-Control-Allow-Origin' : "*",
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE',
        'Access-Control-Allow-Headers' : 'Content-Type'
    })
    const order = req.body.data;
    console.log(order);
    console.log(order.cartItems);

   
        let transporter =  nodemailer.createTransport({
            service : "gmail",
            port : 467,
            secure : true,
            auth : {
                user : 'saidhakshin75@gmail.com',
                pass : process.env.Gpass,
            },
        });
        
        let options = {
            to : order.email,
            from : 'saidhakshin75@gmail.com',
            subject : "Order",
            text : 'Hello',
            html : "<h2>Order Details</h2><table><tr><th>Name</th><th>Phone</th><th>Email</th><th>Product</th><th>Quantity</th><th>Total</th></tr>"
            + "<tr><td>" +  order.name + "</td><td>" +  order.phone + "</td><td>" +  order.email + "</td><td>" +  order.cartItems.name + "</td><td>" +  order.cartItems.quantity + "</td><td>" +  order.cartItems.totalPrice + "</td></tr></table>"
            + "<h2>Location : latitude : " + order.coords.lat +" . Longitude : " +  order.coords.lng + "</h2>"
        }
    
         transporter.sendMail(options , (err,info) => {
            if(err){
                console.log(err);
            }
            console.log(info.response);
        })
    



    
    
   res.send('successful');


    
}
