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
exports.deletePost = async (req,res) => {
  const id = req.params.id;
  try {
    const post = await Post.findByIdAndRemove(id)
    if (!post){
      console.log('No category with that name')
      return res.status(400).send('No post with that name')
    }
    res.send({post})
  }
  catch(err){
    console.log(err,"caught error, post could not delete post")
    res.status(404).send("could not delete post")
  }
}
exports.updatePost = async (req,res) => {
    const id = req.params.id
    const {category} = req.body
    try {
      const postCat = await PostCat.findOne({category: category})
      if (!postCat){
        console.log('No category with that name')
        return res.status(400).send('No category with that name')
      }
      //convert req body to category object
      req.body.category = postCat
      const updatedPost = await Post.findByIdAndUpdate(id, { $set: req.body}, {new: true})
      if (!updatedPost){
        console.log('post could not update')
        return res.status(404).send('post could not update')
      }
      return res.send(updatedPost)
    }
    catch(err){
      console.log(err,"caught error, post could not update")
      res.status(404).send("post could not update")
    }
}


exports.getPosts = (req, res, next)=> {
  Post.find({}).then((posts)=>{
    res.send({posts})
  }, (e) =>{
    res.status(400).send(e)
  });
}
exports.postView = async (req, res, next)=> {
  const { id } = req.params
  try {
    const post = await Post.findOne({_id: id})
    if(!post){
      return res.status(404).send('no post with that id found')
    }
    res.send({post})
  }
  catch(err){
    console.log(err,'no post with that id found')
    res.status(404).send('no post with that id found')
  }
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
