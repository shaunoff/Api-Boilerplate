const auth = require('express').Router();
const controller = require('../../controllers/authentication')

auth.post('/signup', controller.signup);


module.exports = auth;
