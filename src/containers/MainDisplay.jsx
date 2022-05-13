import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';


// IMPORT CHILDREN COMPONENTS
import StartResetButton from '../components/StartResetButton';
import DeleteButton from '../components/DeleteButton';
import SubmitButton from '../components/SubmitButton';
import AddCardField from '../components/AddCardField';
import PreviousCardButton from '../components/PreviousCardButton';
import NextCardButton from '../components/NextCardButton';
import FlashcardButton from '../components/FlashcardButton';

const mapStateToProps = (state) => ({
  // flashcardsArray: flashcard.flashcardsArray,
  // currentFlashcard: flashcard.currentFlashcard,
  cardDisplay: state.cardDisplay,
  // currentCardIndex: flashcard.CardIndex,
  newFrontText: state.newFrontText,
  newBackText: state.newBackText
})

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
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <StartResetButton
          resetCards={this.props.resetCards}
        />
        <DeleteButton
          deleteCard={this.props.deleteCard}
        />
        <SubmitButton
          createUpdateCard={this.props.createUpdateCard}
        /> 
        <AddCardField
          newFrontTextAC={this.props.newFrontTextAC}
          newBackTextAC={this.props.newBackTextAC}
          newFrontText={this.props.newFrontText}
          newBackText={this.props.newBackText}
          createUpdateCard={this.props.createUpdateCard}
        /> 
        <PreviousCardButton
          decrementCard={this.props.decrementCard}
        />  
        <NextCardButton
          incrementCard={this.props.decrementCard}
        /> 
        <FlashcardButton
          cardDisplay={this.props.cardDisplay}
          flipCard={this.props.flipCard}
        /> 
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainDisplay);