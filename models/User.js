const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
    minlength: 8,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
