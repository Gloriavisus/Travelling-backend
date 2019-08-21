const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId= Schema.Types.ObjectId;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  hobbies:{
    type: String,
  },

  password: {
    type: String,
    required: true
  },
  trips: [{
    type: ObjectId,
    ref: "Trip"
  }],
  description: {
    type: String,
  },

  image:{
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

