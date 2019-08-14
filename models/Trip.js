const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId= Schema.Types.ObjectId;

const tripSchema = new Schema({
  
  tripsharer: {
    type: ObjectId,
    ref: 'User'
  },

  country: {
    type: ObjectId,
    ref: 'Country'
  },

  description: {
    type: String,
  },
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
