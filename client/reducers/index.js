// IMPORT COMBINE REDUCER FUNCTION FROM REDUX MODULE
import { combineReducers } from 'redux';


// IMPORT FLASHCARDREDUCER 
import flashchardReducer from './reducer.js';


// COMBINE THE REDUCERS
const reducers = combineReducers({
  flashcard: flashchardReducer
});


// EXPORT COMBINED REDUCERS FOR USE BY STORE
export default reducers;

