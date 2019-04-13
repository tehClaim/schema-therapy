import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ysqItemsReducer from '../reducers/ysqItems';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      ysqItems: ysqItemsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
