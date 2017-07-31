const posts = require('express').Router();
const controller = require('../../controllers/posts')

posts.post('/create', controller.createPost);
posts.get('/', controller.getPosts);
posts.get('/:id', controller.postView);

module.exports = posts;
