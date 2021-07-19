const mongoose = require('../../database');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },  
  grade: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Grade',
    require: true
  },
  chapters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter'
  }],
  chaptersOrder: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

var Book = mongoose.model("Book", BookSchema);

module.exports = Book;