import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import blog from './reducers/blog';

// dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      blog,
    }),
    composeEnhancers()
  );
  return store;
};
