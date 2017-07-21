const routes = require('express').Router();

const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });


const todos = require('./todos');
const auth = require('./auth');
const bamboo = require('./bamboo');

//all /todos routes require authentication
routes.use('/todos',requireAuth, todos);

routes.use('/auth', auth);

routes.use('/bamboo', bamboo);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});


module.exports = routes;
