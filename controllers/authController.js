require('../util/passport-OAuth');
const passport = require('passport');

exports.onLoginPass = (req,res) => {
    if(req.user){
        res.status(200).json({
            success : true,
            message : 'success',
            user : req.user,
            cookie : req.cookies
        })
    }
}


exports.onLoginFail = (req,res) => {
    res.status(401).json({
        success : false,
        message : 'failure'
    })
}

exports.onLogout = (req,res) => {
    if(req.user){
        req.logout();
    res.redirect('http://localhost:3000');
    }
}


exports.authGoogle = passport.authenticate('google' ,{ scope : ['email','profile']});

exports.authGoogleCallBack =  passport.authenticate('google' , {
    successRedirect:"http://localhost:3000",
    failureRedirect:"/"
});