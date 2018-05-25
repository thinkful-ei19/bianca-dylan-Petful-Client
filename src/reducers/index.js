import { combineReducers } from 'redux';
import { catReducer } from './cat';
import { dogReducer } from './dog';

const reducers = {
  catToAdopt: catReducer,
  dogToAdopt: dogReducer
};

export const reducer = combineReducers(reducers);