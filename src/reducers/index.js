// IMPORT COMBINE REDUCER FUNCTION FROM REDUX MODULE
import { combineReducers } from 'redux';


// IMPORT FLASHCARDREDUCER 
import flashchardReducer from './reducer';


export default combineReducers({
  flashcard: flashchardReducer
});

