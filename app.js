const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 8000; 
const userRoutes = require('./routes/user');
// const session = require('express-session');
const sequelize = require('./util/sequelize');
const passport = require('passport');
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const path = require('path');

require('./util/passport-Oauth');

app.use(cookieSession({
  name : 'session' ,
  keys : ['anime'],
  maxAge : 24 * 60 * 60 * 100
}))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// var SequelizeStore = require("connect-session-sequelize")(session.Store);


app.use(userRoutes);


// app.use(session ({
//   secret : 'secret',
//   resave : false,
//   saveUninitialized : false,
//   store: myStore
// }))



var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}


app.use(express.json());
app.use(express.urlencoded());

// app.use(cookieParser());

app.use(cors({
  origin : process.env.PORT || 'http://localhost:3000',
  methods : 'GET,POST,PUT,DELETE',
  credentials : true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// var myStore = new SequelizeStore({
//   db: sequelize,
// });

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname , "/client/build")));

app.get("*",(req,res) => {
  res.sendFile(path.join(__dirname,"/client/build","index.html"));
})




sequelize
// .sync({force : true})
.sync()

.then(cart =>{
    console.log(cart);
    app.listen(port , ()=>{
        console.log("Server started listening at" + port);
    })
})
.catch(err=>{
    console.log(err);
})


// myStore.sync().then(result => {
//   console.log(result);
// }).catch(err =>{
//   console.log(err);
// })







