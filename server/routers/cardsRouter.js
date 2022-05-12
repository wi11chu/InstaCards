const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cardsController');

router.delete('/', cardsController.deleteFlashcard, (req, res) => {
  return res.sendStatus(200);
  // can use the response to tell client which card was deleted
  // or can just send a status message of success if no time
})

router.post('/', cardsController.createOrUpdateCard, (req, res) => {
  return res.sendStatus(200);
})

router.get('/', cardsController.getAllCards, (req, res) => {
  res.status(200);
  return res.send(res.locals.allCards);
})

module.exports = router;