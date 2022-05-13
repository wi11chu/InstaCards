import React, { Component } from 'react';
import { render } from 'react-dom';


const AddCardField = (props) => {
    return (
      <form onSubmit={props.createUpdateCard}>
        <input // input is inline
          value={props.newFrontText}
          onChange={e => props.newFrontTextAC(e.target.value)}
        />
        <input
          value={props.newBackText}
          onChange={e => props.newBackTextAC(e.target.value)}
        />
        <button type="submit">'Submit'</button>
      </form>
    )
}


export default AddCardField;
