const auth = require('express').Router();
const controller = require('../../controllers/authentication')

const passportService = require('../../services/passport');
const passport = require('passport');

const requireSignin = passport.authenticate('local', { session: false });


auth.post('/signin', requireSignin, controller.signin);
auth.post('/signup', controller.signup);


module.exports = auth;
