const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017/psychometrika', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
mongoose.Promise = global.Promise;

module.exports = mongoose;