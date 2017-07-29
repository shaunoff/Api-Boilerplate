const posts = require('express').Router();
const controller = require('../../controllers/posts')

posts.post('/create', controller.createPost);


module.exports = posts;
