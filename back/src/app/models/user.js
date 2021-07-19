const mongoose = require('../../database');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  grade: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Grade',
    required: function() { return !this.isAdmin; }
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

UserSchema.pre('save', async function(next){
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
})

var User = mongoose.model("User", UserSchema);

module.exports = User;