const Flashcard = require('../models/flashcardModel');

const cardsController = {};


cardsController.createOrUpdateCard = (req, res, next) => {
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
};

cardsController.getAllCards = (req, res, next) => {
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

cardsController.deleteFlashcard = (req, res, next) => {
  const { frontText } = req.body;
  Flashcard.deleteOne({ frontText: frontText }, 
    (err, card) => {
      if (err) next(err)
      return next();
    });
};






module.exports = cardsController;