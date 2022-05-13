import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';

const store = createStore(
  reducers,
  // composeWithDevTools()
);

export default store;