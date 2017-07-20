const {User} = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp, role: "Employee"}, config.secret);
}

exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  res.send({
    result: "succesfully signed in here's your token",
    token: tokenForUser(req.user)
  });
}


exports.signup = (req, res, next)=> {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }

  // See if a user with the given email exists
  User.findOne({email: email}).then((existingUser)=>{
    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }
    // If a user with email does NOT exist, create and save user record
    const user = new User({
      email: email,
      password: password
    });
    user.save().then((doc) => {
        res.json({token: tokenForUser(user)});
      }, (e) => {
        res.status(400).send(e);
      });
  }, (e) =>{
    return next(err);
  });

}
