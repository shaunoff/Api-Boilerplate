var mongoose = require('mongoose');

var Bamboo = mongoose.model('Bamboo', {
  data: {
    type: Object,

  }
});

module.exports = {Bamboo};
