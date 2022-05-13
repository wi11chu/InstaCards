import React, { Component } from 'react';
import { render } from 'react-dom';

const SubmitButton = (props) => {
    return (
      <button onClick={props.createUpdateCard}>'Submit'</button>
    )
}


export default SubmitButton;
