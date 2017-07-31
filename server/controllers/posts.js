const {Post} = require('../models/post');

exports.createPost = (req, res, next)=> {
  const {title,category,content,author} = req.body
  var post = new Post({
    title,
    category,
    content,
    author
  });

  post.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
}

exports.getPosts = (req, res, next)=> {
  Post.find({}).then((posts)=>{
    res.send({posts})
  }, (e) =>{
    res.status(400).send(e)
  });
}
exports.postView = (req, res, next)=> {
  const { id } = req.params
  Post.findOne({_id: id}).then((post)=>{
    if(!post){
      return res.status(404).send()
    }
    res.send({post})
  }, (e) =>{
    res.status(400).send()
  });
}
