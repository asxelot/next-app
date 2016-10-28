import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import counter from '../stores/counter';

export const reducer = combineReducers({
  counter
});

export const initStore = (reducer, initialState, isServer) => {
  if (isServer || typeof window === 'undefined') {
    return createStore(reducer, initialState);
  } else {
    if (!window.store) {
      const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

      window.store = createStore(reducer, initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
    }
    return window.store;
  }
};