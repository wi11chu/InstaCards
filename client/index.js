import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store.js';
import reducers from './reducers/index.js';
// import styles eventually


render(
  <Provider store={store}>
    <App></App>
  </Provider>, 
  document.querySelector('#root')
);

