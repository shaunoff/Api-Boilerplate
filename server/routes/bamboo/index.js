const bamboo = require('express').Router();
const controller = require('../../controllers/bamboo')

bamboo.post('/', controller.test);

bamboo.get('/', controller.getUsers);

module.exports = bamboo;
