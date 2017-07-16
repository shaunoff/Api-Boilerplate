var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/api');
mongoose.connect("mongodb://heroku_v59mr4zh:bt2g0mou13flrrqem65gv5gqan@ds161262.mlab.com:61262/heroku_v59mr4zh");

module.exports = {mongoose};
