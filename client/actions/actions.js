// IMPORT ACTION TYPES
import * as types from './actionTypes';


// CREATE AND EXPORT THE ACTION CREATORS TO BE USED IN THE REDUCER MODULE

export const resetCards = () => ({ // the paranthesis after arrow signifies a return
  type: types.resetCards
  // no payload needed for this, it will turn into a GET request
});

export const deleteCard = frontText => ({
  type: types.deleteCard,
  payload: frontText // frontText property on flashcard we are trying to delete
});

export const createUpdateCard = data => ({
  type: types.createUpdateCard,
  payload: { frontText, backText } // frontText we are trying to create/update in database
});

export const newFrontTextAC = frontText => ({
  type: types.newFrontText,
  payload: frontText // obtained from the form fields (onChange event)
});

export const newBackTextAC = backText => ({
  type: types.newBackText,
  payload: backText // obtained from the form fields (onChange event)
});

export const incrementCard = () => ({
  type: types.incrementCard
  // no payload needed for this, modifying state
});

export const decrementCard = () => ({
  type: types.decrementCard
  // no payload needed for this, modifying state
});

export const flipCard = () => ({
  type: types.flipCard
});