const todos = require('express').Router();
const {ObjectID} = require('mongodb')
const controller = require('../../controllers/todos')

todos.post('/', controller.postTodo);

todos.get('/', controller.getTodos);

todos.get('/:id', controller.singleTodo);

todos.delete('/:id', controller.deleteTodo);

todos.patch('/:id', controller.updateTodo)


// models.use('/:modelId/cars', cars);
//
// models.get('/:modelId', single);
// models.get('/', all);

module.exports = todos;
