const mongoose = require('../../database');

const GradeSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

var Grade = mongoose.model("Grade", GradeSchema);

module.exports = Grade;