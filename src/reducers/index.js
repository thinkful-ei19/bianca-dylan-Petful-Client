import { combineReducers } from 'redux';
import { catReducer } from './cat';

const reducers = {
  catReducer
};

export const reducer = combineReducers(reducers);