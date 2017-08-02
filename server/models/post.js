const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  category: {
    type: Object,
    required: true
  },
  author: {
    type: String,
    required: true,
    minlength: 1,
  },
  excerpt: {
    type: String,
    minlength: 1,
  },
  date:{
    type : Date,
    default: Date.now
  },
  content: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  }
});




var Post = mongoose.model('Post', postSchema);

module.exports = {Post}
