import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx"; 

// ADDED AFTER. TESTING.
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store';

render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById("app")
);
