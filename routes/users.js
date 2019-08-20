'use strict';

const express = require('express');
const router = express.Router();

router.get('/:id', async (req, res, next)=>{
  const {id}= req.params;
  try {
    const specificUser= await user.findById(id);
    res.status(200).json(specificUser);
  } catch (error){
    next(error);
  }
});
module.exports = router;
