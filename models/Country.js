const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  }, 
  users: {
    type: Array,

  },
  description: {
    type: String,
  },
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;

