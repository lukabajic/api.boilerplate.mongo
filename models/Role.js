const mongoose = require('mongoose');

const { Schema } = mongoose;

const roleSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: Number,
    required: true,
    unique: true,
  },
});

const Role = mongoose.model('role', roleSchema);

module.exports = Role;
