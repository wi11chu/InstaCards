const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// FLASHCARD SCHEMA
const flashcardSchema = new Schema({
  frontText: { type: String, required: true },
  backText: { type: String, required: true }
});

// EXPORT FLASHCARD SCHEMA 
module.exports = mongoose.model('Flashcard', flashcardSchema);