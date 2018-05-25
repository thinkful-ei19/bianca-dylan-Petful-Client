import {FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS, FETCH_DOG_ERROR, ADOPT_DOG_REQUEST, ADOPT_DOG_SUCCESS, ADOPT_DOG_ERROR} from '../actions';

const initialState = {
    data: {
        imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
        imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
        name: 'Zeus',
        sex: 'Male',
        age: 3,
        breed: 'Golden Retriever',
        story: 'Owner Passed away'
      },
    error: null,
    loading: false
}
export default (state = initialState, action)=> {
    if(action.type === FETCH_DOG_REQUEST){
        return Object.assign({}, state, {
            loading: true
        })
    }
    if(action.type === FETCH_DOG_SUCCESS){
        return Object.assign({}, state, {
            data: action.data
        })
    }
    if(action.type === FETCH_DOG_ERROR){
        return Object.assign({}, state, {
            error: action.error
        })
    }
    if(action.type === ADOPT_DOG_REQUEST){
        return Object.assign({}, state, {
            loading: true
        })
    }
    if(action.type === ADOPT_DOG_SUCCESS){
        return Object.assign({}, state, {
            data: action.data
        })
    }
    if(action.type === ADOPT_DOG_ERROR){
        return Object.assign({}, state, {
            error: action.error
        })
    }
    console.log(state);
    return initialState;

}