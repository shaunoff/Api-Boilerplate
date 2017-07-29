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
    type: String,
    required: true,
    trim: true,
    minlength: 1,
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
