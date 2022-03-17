import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions.js';

// IMPORT CHILDREN COMPONENTS
import startResetButton from '../components/startResetButton.jsx';
import deleteButton from '../components/deleteButton.jsx';
import submitButton from '../components/submitButton.jsx';
import addCardField from '../components/addCardField.jsx';
import previousCardButton from '../components/previousCardButton.jsx';
import nextCardButton from '../components/nextCardButton.jsx';
import flashcardButton from '../components/flashcardButton.jsx';

const mapStateToProps = state => ({
  // flashcardsArray: state.flashcard.flashcardsArray,
  // currentFlashcard: state.flashcard.currentFlashcard,
  cardDisplay: state.flashcard.cardDisplay,
  // currentCardIndex: state.flashcard.CardIndex,
  newFrontText: state.flashcard.newFrontText,
  newBackText: state.flashcard.newBackText
})

const mapDispatchToProps = dispatch => ({
  resetCards: () => dispatch(actions.resetCards()),
  deleteCard: (frontText) => dispatch(actions.deleteCard(frontText)),
  createUpdateCard: (data) => dispatch(actions.createUpdateCard(data)),
  newFrontTextAC: (frontText) => dispatch(actions.newFrontTextAC(frontText)),
  newBackTextAC: (backText) => dispatch(actions.newBackTextAC(backText)),
  incrementCard: () => dispatch(actions.incrementCard()),
  decrementCard: () => dispatch(actions.decrementCard()),
  flipCard: () => dispatch(actions.flipCard())
});

const mainDisplay = props => {
  <div className="mainDisplay">
    <startResetButton
      resetCards={props.resetCards}
    />
    <deleteCardButton
      deleteCard={props.deleteCard}
    />
    <submitButton
      createUpdateCard={props.createUpdateCard}
    />  
    <addCardField
      newFrontTextAC={props.newFrontTextAC}
      newBackTextAC={props.newBackTextAC}
      newFrontText={props.newFrontText}
      newBackText={props.newBackText}
      createUpdateCard={props.createUpdateCard}
    />  
    <previousCardButton
      decrementCard={props.decrementCard}
    />  
    <nextCardButton
      incrementCard={props.decrementCard}
    /> 
    <flashcardButton
      cardDisplay={props.cardDisplay}
      flipCard={flipCard}
    /> 
  </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(mainDisplay);