'use strict';

const express = require('express');
const Country= require('../models/Country');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const listOfcountries = await Country.find()
  res.json(listOfcountries).status(200);
});

router.get('/country/:id', async (req,res,next) =>{
  const specificCountry = await Country.findById()
  res.json(specificCountry).status(200);
});

module.exports = router;