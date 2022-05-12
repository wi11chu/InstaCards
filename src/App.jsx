import React, { Component } from 'react';
import { render } from 'react-dom';
import MainDisplay from './containers/MainDisplay.jsx';
import Box from './containers/Box.jsx';

class App extends Component {

  render(){
    return ( 
      <section>
        {/* <MainDisplay/> */}
        <Box/>
      </section>
    )
  }
}

export default App;