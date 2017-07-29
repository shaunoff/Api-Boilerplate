const {Post} = require('../models/post');

exports.createPost = (req, res, next)=> {
  const {title,category,content} = req.body
  var post = new Post({
    title,
    category,
    content
  });

  post.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
}
