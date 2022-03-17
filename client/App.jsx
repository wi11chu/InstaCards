import React from 'react';
import mainDisplay from './containers/mainDisplay.jsx';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <mainDisplay />
      </div>
    );
  }
}

export default App;