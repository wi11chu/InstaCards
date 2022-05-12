import React, { Component } from 'react';
import { render } from 'react-dom';

class SubmitButton extends Component {
  render () {
    return (
      <button onClick={props.createUpdateCard}>'Submit'</button>
    )
  }
}


export default SubmitButton;
