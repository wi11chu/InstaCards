// IMPORT ACTION TYPES
import * as type from '../actions/actionTypes.js'


// DECLARE INITIATE STATE 
const initialState = {
  flashcardsArray: [ { frontText: 'Add Cards!', backText: 'You Need to Add Cards!!!'} ],
  currentFlashcard: { frontText: 'Add Cards!', backText: 'You Need to Add Cards!!!'},
  cardDisplay: 'Add Cards!',
  currentCardIndex: 0,
  newFrontText: '',
  newBackText: ''
};


// DECLARE REDUCER FUNCTION (ONLY NEED ONE FOR THIS APP)
const flashcardReducer = (state = initialState, action) => {
  let newFlashcardsArray;
  let newCurrentCardIndex;
  let newCurrentFlashcard;
  let newCardDisplay;

  switch (action.type) {
    
    // THIS TRIGGERS WHEN THE START/RESET BUTTON IS CLICKED
    // WE WANT TO RESET STATE TO THE INITIAL STATE AND ADD ALL OF THE FLASHCARDS FROM THE DB TO STATE
    case type.resetCards:
    // case "resetCards":
      fetch('http://localhost:3000/startReset', {
        method: 'GET',
        headers:{
          'Accept' : 'application/json',
          'Content-Type' : 'application/json'
        }
      }).then((data) => data.json()
      ).then((data) => {
        // data should be an array of all the flashcards from server
        const flashcardsFromDB = [...data];
        return {
          ...initialState, // resets state to initial state
          flashcardsArray: initialState.flashcardsArray.concat(flashcardsFromDB) // concats array from DB to the end
        }
      }).catch((error) => console.log(error));


    // // THIS TRIGGERS WHEN THE DELETE BUTTON IS CLICKED
    // // WE WANT TO DELETE THE CURRENT CARD FROM THE FLASHCARDS ARRAY AND SEND A DELETE REQUEST TO DB
    case type.deleteCard:
    // case "deleteCard":
      fetch('http://localhost:3000/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type' : 'application/json'
        },
        // the server is expecting body to contain an object with frontText property
        // the frontText value would come from the payload in the action object
        body: JSON.stringify({
          frontText: action.payload 
        })
        // we will not send anything back to the client to save time for this solo project
      }).then(() => {
        // remove the specific flashcard from the array in state (we will not reset state)
        // unsure about creating deep clones of the objects inside... will see if app glitches
        newFlashcardsArray = JSON.parse(JSON.stringify(state.flashcardsArray)); // deep clone of state's flashcard array
        for (let i = 0; i < newFlashcardsArray.length; i++) {
          if (newFlashcardsArray[i].frontText === action.payload) {
            newFlashcardsArray.splice(i, 1); // this removes the current object and returns modified array
          }
        };
        // return the updated state, only updating the array (with the specific card removed)
        // we need to update the current flashcard to show the next flashcard that took the old one's place in the array (index doesnt change)
        return {
          ...state,
          flashcardsArray: newFlashcardsArray,
          currentFlashcard: newFlashcardsArray[state.currentCardIndex]
        }
      }).catch((error) => console.log(error));

    
    // THIS TRIGGERS WHEN THE SUBMIT BUTTON IS CLICKED
    // WE WANT TO CHECK THE CURRENT FLASHCARD ARRAY IN STATE AND FIND CARD AND UPDATE.
      // IF IT DOESNT EXIST, CREATE IT AND PUSH IT TO THE END OF THE FLASHCARD ARRAY
    // WE ALSO WANT TO SEND A REQUEST TO THE DB TO UPSERT THE CARD
    // case "createUpdateCard":
    case type.createUpdateCard:
      fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ 
          frontText: action.payload.frontText,
          backText: action.payload.backText
        })
      }).then(() => {
        newFlashcardsArray = JSON.parse(JSON.stringify(state.flashcardsArray));
        newFlashcardsArray.push({ frontText: action.payload.frontText, backText: action.payload.backText })
        return {
          ...state,
          flashcardsArray: newFlashcardsArray
        };
      }).catch((error) => console.log(error));
      

    // THIS TRIGGERS WHEN THE THE FRONT TEXT FORM IS TYPED INTO
    // WE WANT TO UPDATE STATE'S NEWFRONTTEXT VALUE
    case type.newFrontText:
    // case "newFrontText":
      return {
        ...state,
        newFrontText: action.payload
      };
         

    // THIS TRIGGERS WHEN THE THE BACK TEXT FORM IS TYPED INTO
    // WE WANT TO UPDATE STATE'S NEWBACKTEXT VALUE 
    case type.newBackText:
    // case "newBackText":
      return {
        ...state,
        newBackText: action.payload
      };
  

    // THIS TRIGGERS WHEN THE THE NEXT CARD BUTTON IS CLICKED
    // WE WANT TO INCREMENT CURRENTCARDINDEX AND UPDATE CURRENTFLASHCARD
    case type.incrementCard:
    // case "incrementCard":
      newCurrentCardIndex = state.currentCardIndex+1;
      newCurrentFlashcard = state.flashcardsArray[newCurrentCardIndex]
      // NEED TO HANDLE WHEN WE ARE AT END OF ARRAY
      return {
        ...state,
        currentCardIndex: newCurrentCardIndex,
        currentFlashcard: newCurrentFlashcard
      };


    // THIS TRIGGERS WHEN THE THE PREVIOUS CARD BUTTON IS CLICKED
    // WE WANT TO DECREMENT CURRENTCARDINDEX AND UPDATE CURRENTFLASHCARD
    case type.decrementCard:
    // case "decrementCard":
      newCurrentCardIndex = state.currentCardIndex-1;
      newCurrentFlashcard = state.flashcardsArray[newCurrentCardIndex]
      // NEED TO HANDLE WHEN WE ARE AT THE BEGINNING OF THE ARRAY
      return {
        ...state,
        currentCardIndex: newCurrentCardIndex,
        currentFlashcard: newCurrentFlashcard
      };


    // THIS TRIGGERS WHEN THE FLASHCARD IS CLICKED
    case type.flipCard:
    // case "flipCard":
      if (state.cardDisplay === state.currentFlashcard.frontText) {
        newCardDisplay = state.currentFlashcard.backText;
      } else {
        newCardDisplay = state.currentFlashcard.frontText;
      }
      // SET NEW DISPLAY ON STATE
      return {
        ...state,
        cardDisplay: newCardDisplay
      };

    
    default: {
      return state;
      };
  }
};


// TEST THE REDUCER CODES OUT SINCE BACK END IS WORKING!
// let action1 = { type: "createUpdateCard", payload: { frontText: "Darth", backText: "Vader" } }
// let action1 = { type: "deleteCard", payload: "Darth" }
// flashcardReducer(initialState, action1) 

export default flashcardReducer;