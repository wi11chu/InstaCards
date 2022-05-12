import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index.js';

const store = createStore(
  reducers,
  // composeWithDevTools()
);

export default store;