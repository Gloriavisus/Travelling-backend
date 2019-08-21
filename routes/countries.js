'use strict';

const express = require('express');
const Country= require('../models/Country');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const listOfcountries = await Country.find()
    res.json(listOfcountries).status(200);
  } catch(error){
    next(error);
  }
});

router.get('/:id', async (req,res,next) =>{
  const { id } = req.params;
  try {
    const specificCountry = await Country.findById(id).populate("users")
    res.status(200).json(specificCountry);
  } catch(error){
    next(error);
  }
});

router.post('/new', async (req, res, next)=> {
  try {
    const newCountry = req.body;
    const createdCountry = await Country.create(newCountry);
    res.status(200).json(createdCountry);
  } catch(error){
    next(error);
  }
});

//update favourites in country
router.put('/country/:id/preference', async (req, res, next)=>{

  try {
    const {id}= req.params;
    const {_id} = req.session.currentUser;
    const country = await Country.findById(id)
    const checkCountryIncludes = await country.users.some(user => {
      return user.equals(_id);
  });
      if(checkCountryIncludes){
        res.json({message: "tu estas aqui"})
      } else {
        const updatePreferences = await Country.findByIdAndUpdate(id, {$push:{users: _id}}, {new: true});
        res.status(200).json(updatePreferences);
      }
    
  } catch (error){
    next(error);
  }
});

//update with country code
router.put('/:id/update', async (req, res, next)=>{
  const {id}= req.params;
  const countryUpdated = req.body;
  try {
    const updated = await Country.findByIdAndUpdate(id,countryUpdated, {new: true});
    res.status(200).json(updated);
  } catch (error){
    next(error);
  }
});
router.delete('/:id/delete', async (req, res, next)=>{
  const {id}= req.params;
  try {
    await Country.findByIdAndDelete(id);
    res.status(200).json({message:'country deleted'});
  } catch (error){
    next(error);
  }
});
module.exports = router;