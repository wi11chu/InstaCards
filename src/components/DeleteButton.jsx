import React, { Component } from 'react';
import { render } from 'react-dom';

class DeleteButton extends Component {
  render() {
      return (
        <button onClick={this.props.deleteCard}>'Delete'</button>)
  }
}

export default DeleteButton;
