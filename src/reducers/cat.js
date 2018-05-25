import { FETCH_CAT_REQUEST, FETCH_CAT_SUCCESS, FETCH_CAT_ERROR, ADOPT_CAT_REQUEST, ADOPT_CAT_ERROR } from '../actions/index';

const initialState = {
  data: {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
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