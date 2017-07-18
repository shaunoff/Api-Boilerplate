const express = require('express');
const cors = require('cors');
const http = require('http')
const routes = require('./routes');
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose');
const socketIO = require('socket.io')
const sockets = require('./sockets/sockets');
const port = process.env.PORT || 3009

var app = express();
const server = http.createServer(app)
const io = socketIO(server)

app.use(cors())
app.use(bodyParser.json());
app.use('/', routes);

sockets(io)




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



server.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
