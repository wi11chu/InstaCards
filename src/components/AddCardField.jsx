import React, { Component } from 'react';
import { render } from 'react-dom';


class AddCardField extends Component {
  render() {
    return (
      <form onSubmit={createUpdateCard}>
        <input // input is inline
          value={newFrontText}
          onChange={e => this.props.newFrontTextAC(e.target.value)}
        />
        <input
          value={newBackText}
          onChange={e => this.props.newBackTextAC(e.target.value)}
        />
        <button type="submit">'Submit'</button>
      </form>
    )
  }
}


export default AddCardField;
