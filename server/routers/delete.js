const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Flashcard = require('../models/flashCardModel.js')


// for this app, clicking delete button will send a request to the DB to delete


// MIDDLEWARE FUNCTION: SENDING DELETE REQUEST TO DB
// mongodb data is in BSON
const deleteFlashcard = (req, res, next) => {
  const { frontText } = req.body;
  Flashcard.deleteOne({ frontText: frontText }, 
    (err, card) => {
      if (err) next(err)
      return next();
    });
}


// ROUTER FUNCTION AND MIDDLEWARE CHAIN
router.delete('/', deleteFlashcard, (req, res) => {
  return res.sendStatus(200);
  // can use the response to tell client which card was deleted
  // or can just send a status message of success if no time
})


module.exports = router; // means we are exporting the router Class and all the prototype methods along with it