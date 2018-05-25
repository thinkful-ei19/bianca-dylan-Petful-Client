import { combineReducers } from 'redux';
import { catReducer } from './cat';
import { dogReducer } from './dog';

const reducers = {
  catReducer,
  dogReducer
};

export const reducer = combineReducers(reducers);