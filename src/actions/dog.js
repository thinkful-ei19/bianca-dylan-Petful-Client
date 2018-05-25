import {API_BASE_URL} from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
    type: FETCH_DOG_REQUEST
});
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
    type: FETCH_DOG_SUCCESS,
    dog
});
export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = error => ({
    type: FETCH_DOG_ERROR,
    error
});
export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
export const adoptDogRequest = () => ({
    type: ADOPT_DOG_REQUEST
})
export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = dog => ({
    type: ADOPT_DOG_SUCCESS,
    dog
})
export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError = error => ({
    type: ADOPT_DOG_ERROR,
    error
})
export const fetchDog = () => dispatch => {
    dispatch(fetchDogRequest());
    return fetch(`${API_BASE_URL}/dog`, {
        method: 'GET'
    })
        .then(res => {
            if(!res.ok){
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(data => dispatch(fetchDogSuccess(data)))
        .catch(err => dispatch(fetchDogError(err)));
}
export const adoptDog = () => dispatch => {
    dispatch(adoptDogRequest());
    return fetch(`${API_BASE_URL}/dog`, {
        method: 'DELETE'
    })
        .then(res => {
            if(!res.ok){
                return Promise.reject(res.statusText);
            }
            return dispatch(fetchDog());
        })
        .then(data => dispatch(fetchDogSuccess(data)))
        .catch(err => dispatch(fetchDogError(err)));
}
