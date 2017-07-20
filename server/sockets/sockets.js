const {Book} = require('../models/book');
const jwt = require('jwt-simple');
const config = require('../../config');

var sockets = (io)=>{
  const namespace = io.of("/auth")


  namespace.use((socket,next)=>{
    let decoded
    try {
    decoded = jwt.decode(socket.handshake.query.token, config.secret)
    if (decoded){
      console.log(decoded)
    }
    }
    catch(err){
      return next(new Error("Need to be logged in"))
    }
    if (decoded.role == "Employee"){
      return next()
    }
    return next(new Error("Insufficient Privileges"))
  })

  namespace.on('connection', (socket)=>{

    socket.on('getInitialList',()=>{
      Book.find({}).then((todos)=>{
        socket.emit('initialList', todos)
      }, (e) =>{
        res.status(400).send(e)
      });
    })


    socket.on('addItem', (data)=>{
      const book = new Book(data)
      book.save().then((doc) => {
        namespace.emit('itemAdded', doc)
      }, (e) => {
        res.status(400).send(e);
      });
    })


  })

}

module.exports = sockets
