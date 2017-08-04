const posts = require('express').Router();
const controller = require('../../controllers/posts')

posts.post('/create', controller.createPost);
posts.get('/', controller.getPosts);
posts.get('/postCat', controller.getPostCats);
posts.post('/postCat', controller.addPostCat);
posts.get('/:id', controller.postView);
posts.patch('/:id', controller.updatePost)
posts.delete('/:id', controller.deletePost);
module.exports = posts;
