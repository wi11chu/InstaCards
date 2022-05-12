import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions.js';


// IMPORT CHILDREN COMPONENTS
import StartResetButton from '../components/StartResetButton.jsx';
import DeleteButton from '../components/DeleteButton.jsx';
import SubmitButton from '../components/SubmitButton.jsx';
import AddCardField from '../components/AddCardField.jsx';
import PreviousCardButton from '../components/PreviousCardButton.jsx';
import NextCardButton from '../components/NextCardButton.jsx';
import FlashcardButton from '../components/FlashcardButton.jsx';

const mapStateToProps = ({flashcard}) => {
  return {
  // flashcardsArray: flashcard.flashcardsArray,
  // currentFlashcard: flashcard.currentFlashcard,
  cardDisplay: flashcard.cardDisplay,
  // currentCardIndex: flashcard.CardIndex,
  newFrontText: flashcard.newFrontText,
  newBackText: flashcard.newBackText
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetCards: () => dispatch(actions.resetCards()),
    deleteCard: (frontText) => dispatch(actions.deleteCard(frontText)),
    createUpdateCard: (data) => dispatch(actions.createUpdateCard(data)),
    newFrontTextAC: (frontText) => dispatch(actions.newFrontTextAC(frontText)),
    newBackTextAC: (backText) => dispatch(actions.newBackTextAC(backText)),
    incrementCard: () => dispatch(actions.incrementCard()),
    decrementCard: () => dispatch(actions.decrementCard()),
    flipCard: () => dispatch(actions.flipCard())
  }
}

class MainDisplay extends Component {

  render() {
    return(
      <div>
        {/* <button>MAINDISPLAYTEST</button> */}
        <StartResetButton
          resetCards={props.resetCards}
        />
        <DeleteButton
          deleteCard={props.deleteCard}
        />
        <SubmitButton
          createUpdateCard={props.createUpdateCard}
        /> 
        <AddCardField
          newFrontTextAC={props.newFrontTextAC}
          newBackTextAC={props.newBackTextAC}
          newFrontText={props.newFrontText}
          newBackText={props.newBackText}
          createUpdateCard={props.createUpdateCard}
        /> 
        <PreviousCardButton
          decrementCard={props.decrementCard}
        />  
        <NextCardButton
          incrementCard={props.decrementCard}
        /> 
        <FlashcardButton
          cardDisplay={props.cardDisplay}
          flipCard={props.flipCard}
        /> 
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainDisplay);
// export default MainDisplay;