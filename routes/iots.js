var express = require('express');
var userController = require('../controllers/userController');
var iotController = require('../controllers/iotController');
var router = express.Router();

//console.log("ttezt");
router.route('/main').post(iotController.addDevice)
.get(iotController.getAllIots);

//router.route("/main").get(iotController.getAllIots);

module.exports = router;