import { FETCH_CAT_REQUEST, FETCH_CAT_SUCCESS, FETCH_CAT_ERROR, ADOPT_CAT_REQUEST, ADOPT_CAT_ERROR } from '../actions/index';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export function catReducer(state = initialState, action) {

  if (action.type === FETCH_CAT_REQUEST) {
    return Object.assign({}, state, { loading: true });
  } else if (action.type === FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      loading: false
    });
  } else if (action.type === FETCH_CAT_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  } else if (action.type === ADOPT_CAT_REQUEST) {
    return Object.assign({}, state, { loading: true });
  } else if (action.type === ADOPT_CAT_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }

  return state;

}