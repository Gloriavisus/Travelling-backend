const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId= Schema.Types.ObjectId;

const countrySchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  }, 
  users: [{
    type: ObjectId,
    ref: "User"
  }],
  shortName:{
    type: String,

  },
  description: {
    type: String,
  },
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;

