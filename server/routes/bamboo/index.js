const bamboo = require('express').Router();
const controller = require('../../controllers/bamboo')

bamboo.post('/', controller.test);



module.exports = bamboo;
