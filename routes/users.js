var express = require('express');
var userController = require('../controllers/userController');
var passport = require('passport');
var iotController = require('../controllers/iotController');
var {validateBody, schemas } = require('../helpers/routeHelpers');
var passConf = require('../passport');
const passportSignIn = passport.authenticate('local', {session:false});
const passportJWT = passport.authenticate('jwt', {session : false});


var router = express.Router();

router.route('/signup').post(validateBody(schemas.registerSchema), userController.signUp);

router.route('/signin').post(validateBody(schemas.loginShema), passportSignIn, userController.signIn);

router.route('/user/:user').post(userController.addIotToUser)
.get(userController.getUserIots);

module.exports = router;
