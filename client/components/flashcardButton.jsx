import React from 'react';


const flashcardButton = props => {
  return (
  <button className="flashcardButton" onClick={flipCard}>{cardDisplay}</button>)
}


export default flashcardButton;
