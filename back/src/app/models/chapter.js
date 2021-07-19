const mongoose = require('../../database');

const ChapterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },  
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  html:{
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

var Chapter = mongoose.model("Chapter", ChapterSchema);

module.exports = Chapter;