const {Post} = require('../models/post');
const {PostCat} = require('../models/postCategories');

exports.createPost = (req, res, next)=> {
  const {title,category,content,author,excerpt} = req.body
  PostCat.findOne({category: category}).then((cat)=>{
    var post = new Post({
      title,
      category: cat,
      content,
      author,
      excerpt
    });

    post.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
  })

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

exports.getPostCats = (req, res, next)=> {
  PostCat.find({}).then((cats)=>{
    res.send({cats})
  }, (e) =>{
    res.status(400).send(e)
  });
}
exports.addPostCat = (req, res, next)=> {
  const {category,icon} = req.body
  var cat = new PostCat({
    category,
    icon
  });

  cat.save().then((doc) => {
    console.log(doc)
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
}
