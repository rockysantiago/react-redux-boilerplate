import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducers';

const configureStore = preloadedState => {
  const middlewares = [thunkMiddleware];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancer = compose(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
};

export default configureStore;
