const _ = require('lodash')
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();
app.use(cors())
app.use(bodyParser.json());
app.use('/', routes);



// //Users
//
// app.post('/users', (req, res) => {
//   var body = _.pick(req.body, ['email', 'password']);
//   var user = new User(body);
//
//   user.save().then((user) => {
//     res.send(user);
//   }).catch((e) => {
//     res.status(400).send(e);
//   })
// });



app.listen(3009, () => {
  console.log('Started on port 3009');
});

module.exports = {app};
