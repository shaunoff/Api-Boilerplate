const {Book} = require('../models/book');

var sockets = function(io){
  io.on('connection', (socket)=>{
    console.log("new user connected")

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
        io.emit('itemAdded', doc)
      }, (e) => {
        res.status(400).send(e);
      });
    })


  })
}

module.exports = sockets
