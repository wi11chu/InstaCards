import React, { Component } from 'react';

class Box extends Component {

  render(){ 
    // console.log('PropsObject: ', this.props);
    return ( 

      <button 
        className="button"
        // onClick={
        //   // this.props.handleClick
        // }
      >
        "TEST"
      </button> 

    );
  };
}
export default Box;