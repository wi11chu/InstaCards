const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Flashcard = require('../models/flashCardModel.js')


// for this app, clicking submit button will send a request to the DB to delete


// MIDDLEWARE FUNCTION: SENDING DELETE REQUEST TO DB
// mongodb data is in BSON
const createOrUpdateCard = (req, res, next) => {
  const { frontText, backText } = req.body;
  console.log(req.body)
  Flashcard.findOneAndUpdate({ frontText }, 
    { frontText,
      backText: backText }, // the new backText
    { 
      upsert: true, // updates a card if it exists, and creates a card if it doesnt exist
      returnNewDocument: true, // returns new or updated document instead of original found document
      returnOriginal: false // googling says returnNewDocument doesnt always work, and set returnOriginal to false shoudl fix it
    }, 
    (err, card) => {
      if (err) next(err)
      else res.locals.card = JSON.parse(JSON.stringify(card));
      next();
    });
}


// ROUTER FUNCTION AND MIDDLEWARE CHAIN
router.post('/', createOrUpdateCard, (req, res) => {
  return res.sendStatus(200);
})


module.exports = router; // means we are exporting the router Class and all the prototype methods along with it