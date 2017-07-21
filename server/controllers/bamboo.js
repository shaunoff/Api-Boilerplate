const {Bamboo} = require('../models/bamboo');


exports.test = (req, res, next)=> {
  var bamboo = new Bamboo({
    data: req.body
  });

  bamboo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
}
