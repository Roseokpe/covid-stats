import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { covidReducer } from './covid/reducer';

const rootReducers = combineReducers({
  details: covidReducer,
});

const store = configureStore(
  {
    reducer: rootReducers
  },
  applyMiddleware(thunk, logger),
);

export default store;
