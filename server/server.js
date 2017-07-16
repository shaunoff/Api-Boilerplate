const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const bodyParser = require('body-parser');


const port = process.env.PORT || 3009

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



app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
