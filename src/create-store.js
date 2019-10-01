import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './Reducers/main-reducer';

export default () => {
  return createStore(mainReducer, composeWithDevTools(
    applyMiddleware(),
  ));
};
