import React, { Component } from 'react';
import { render } from 'react-dom';

class NextCardButton extends Component {
  render () {
    return (
      <button onClick={this.props.incrementCard}>'Next Card'</button>
    )
  }
}


export default NextCardButton;
