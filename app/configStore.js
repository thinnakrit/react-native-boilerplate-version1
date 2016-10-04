/* eslint global-require: 0 */

import Immutable from 'immutable';
import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
// import * as actionCreators from './actions/counter';

const middlewares = [thunk];

let enhancer;
let updateStore = f => f;
export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);
  updateStore(store);
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./reducers').default);
    });
  }
  return store;
}
