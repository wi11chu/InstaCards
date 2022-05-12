import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx"; // had to specify .jsx when changed from original .js file

// ADDED AFTER. TESTING.
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store';

// import React from 'react';
// import MainDisplay from './containers/MainDisplay.jsx';

// export default function App() {
//   return <h1>Hello World from App.js File</h1>;
// }

// ReactDOM.render(<App />, document.getElementById("app"));


render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById("app")
);

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app'),
// );