var express = require('express');
const demosControllers = require('../controllers/demos.controllers');
const visitorsController = require('../controllers/visitors.controllers');
const chatbotControllers = require('../controllers/chatbot.controllers');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to Pavan Anand Portfolio apis");
});

/* Visitors API's */
router.get('/getVisitors',visitorsController.getData);
router.post('/insert',visitorsController.insertData);

/* Demos List API's */
router.get('/getDemos',demosControllers.getData);
router.post('/insertDemos',demosControllers.insertData);

/* Chat Bot API's*/ 
router.post('/bot',chatbotControllers.getBotResponse);

module.exports = router;
