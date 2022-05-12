import React, { Component } from 'react';
import { render } from 'react-dom';

class StartResetButton extends Component {
  render () {
    return (
      <button onClick={this.props.resetCards}>'Start/Reset'</button>
    )
  }
}


export default StartResetButton;
