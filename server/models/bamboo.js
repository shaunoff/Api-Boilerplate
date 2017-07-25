var mongoose = require('mongoose');

var Bamboo = mongoose.model('Bamboo', {
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  empNum: {
    type: String,
    required: true
  },
  emailAdded: {
    type: Boolean
  }
});

module.exports = {Bamboo};
