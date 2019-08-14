const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  hobbies: {
    type: String,
  },

  password: {
    type: String,
    required: true
  },

  preference: {
    type: String,
  },

  description: {
    type: String,
  },

  image:{
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

