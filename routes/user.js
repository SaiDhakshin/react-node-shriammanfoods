const express = require('express');
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');


const router = express.Router();

router.get('/logout',authController.onLogout);

router.get('/login/success',authController.onLoginPass)

router.get('/login/fail',authController.onLoginFail);

router.get('/auth/google',authController.authGoogle);

router.get("/auth/google/callback" , authController.authGoogleCallBack);

router.post('/confirm',homeController.postOrder);



module.exports = router;