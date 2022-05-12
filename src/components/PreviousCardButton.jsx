import React, { Component } from 'react';
import { render } from 'react-dom';

class PreviousCardButton extends Component {
  render () {
    return (
      <button onClick={this.props.decrementCard}>'Previous Card'</button>
    )
  }
}


export default PreviousCardButton;
