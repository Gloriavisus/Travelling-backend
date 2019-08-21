const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId= Schema.Types.ObjectId;

const tripSchema = new Schema({
  
  tripsharer: {
    type: ObjectId,
    ref: 'User'
  },
  salida:{
    type: String,
  },
  llegada:{
    type: String,
  },
  precio:{
    type: String,
  },
  duration:{
    type: String,
  }    
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
