'use strict';

const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res, next)=>{
  try {
    const specificUser= await User.find();
    res.status(200).json(specificUser);
  } catch (error){
    next(error);
  }
});
module.exports = router;
