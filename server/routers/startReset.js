const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Flashcard = require('../models/flashCardModel.js')


// for this app, clicking startReset will send a request to the DB to delete


// MIDDLEWARE FUNCTION: SENDING DELETE REQUEST TO DB
// mongodb data is in BSON (I think just the ID of the document)
const getAllCards = (req, res, next) => {
  // since this is a general get request, there is nothing in req
  Flashcard.find({}, 
    (err, cards) => {
      if (err) {
        next(err)}
      else {
        // console.log("before: ", cards); 
        res.locals.allCards = JSON.parse(JSON.stringify(cards));
        // console.log("after: ", res.locals.allCards);
        return next();
      }
    });
}


// ROUTER FUNCTION AND MIDDLEWARE CHAIN
router.get('/', getAllCards, (req, res) => {
  res.status(200);
  return res.json(res.locals.allCards);
})


module.exports = router; // means we are exporting the router Class and all the prototype methods along with it