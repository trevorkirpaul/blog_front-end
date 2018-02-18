import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './sagas/rootSaga';
import blog from './reducers/blog';

// saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      blog,
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  // run saga listener
  sagaMiddleware.run(saga);

  return store;
};
