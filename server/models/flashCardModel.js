const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CREATE A FLASHCARD SCHEMA
const flashcardSchema = new Schema({
  frontText: { type: String, required: true },
  backText: { type: String, required: true }
});

// EXPORT FLASHCARD SCHEMA (Flashcard will be the constructor)
module.exports = mongoose.model('Flashcard', flashcardSchema);

// THIS MODEL WILL ONLY BE USED WHEN THE SUBMIT BUTTON IS CLICKED ON THE APP WHEN WE MAY HAVE TO CREATE A NEW FLASHCARD