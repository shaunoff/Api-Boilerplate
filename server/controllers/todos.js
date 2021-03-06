const {Todo} = require('../models/todo');
const {ObjectID} = require('mongodb')
const _ = require('lodash')

exports.postTodo = (req, res, next)=> {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
}

exports.getTodos = (req, res, next)=> {
  Todo.find({}).then((todos)=>{
    res.send({todos})
  }, (e) =>{
    res.status(400).send(e)
  });
}

exports.singleTodo = (req,res,next)=>{
  const id = req.params.id;
  if (!ObjectID.isValid(id)){
    return res.status(404).send("jdgfjdhjkghdkjfdghkj")
  }
  Todo.findOne({_id: id}).then((todo)=>{
    if(!todo){
      return res.status(404).send()
    }
    res.send({todo})
  }, (e) =>{
    res.status(400).send()
  });
}

exports.deleteTodo = (req,res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)){
    return res.status(404).send()
  }
  Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo){
      return res.status(404).send()
    }
    res.send({todo})
  }).catch((e)=>{
    res.status(400).send()
  })
}

exports.updateTodo = (req,res)=>{
  const id = req.params.id;
  var body = _.pick(req.body,['text','completed'])

  if (!ObjectID.isValid(id)){
    return res.status(404).send()
  }

  if (_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  }
  else {
    body.completed = false;
    body.completedAt = null;
  }
  Todo.findByIdAndUpdate(id, { $set: body}, {new: true}).then((todo)=>{
    if(!todo){
      return res.status(404).send()
    }
    res.send({todo})
  }).catch((e)=>{
    res.status(400).send()
  })
}
