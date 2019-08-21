'use strict';

const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip');
const User = require('../models/User');

router.get('/:id', async (req, res, next)=>{
  try {
    const {id} = req.params;
    const specificTrip= await Trip.findById(id);
    res.status(200).json(specificTrip);
  } catch (error){
    next(error);
  }
});

router.post('/create', async (req, res, next)=>{
  try {
    const {_id} = req.session.currentUser
    console.log(req.body)
    const newTrip = {
      country: req.body.countryFrom, 
      salida: req.body.cityFrom, 
      llegada: req.body.cityTo, 
      precio: req.body.price, 
      duration: req.body.fly_duration
    }   
    const createTrip = await Trip.create(newTrip);
    const updateUser = await User.findByIdAndUpdate(_id, {$push: {trips: createTrip._id }})

    res.status(200).json(updateUser);
  } catch (error){
    next(error);
  }
});


router.delete('/delete/:id', async (req, res, next) => {
  try{
    await Trip.findByIdAndDelete(req.params.id)
    res.status(200).json('ok');
  }catch(e){
    next(e)
  }
})


module.exports = router;
