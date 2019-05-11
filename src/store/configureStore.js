import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ysqItemsReducer from '../reducers/ysqItems';
import schemasReducer from '../reducers/schemas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      ysqItems: ysqItemsReducer,
      schemas: schemasReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
