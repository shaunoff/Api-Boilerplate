var mongoose = require('mongoose');

var PostCat = mongoose.model('PostCat', {
  category: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  icon: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

module.exports = {PostCat};
