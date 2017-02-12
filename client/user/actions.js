import axios from 'axios';

import {
    EDIT_USER,
    RETRIEVE_USER,
    UPDATE_USER,
    DELETE_USER,
    LOGIN_USER,
    REQUEST_BEGIN,
    REQUEST_FAILED,
    REQUEST_SUCCESS,
  endpoint
} from './actionTypes.js';

export function editUser(id){
    return {
        type: EDIT_USER,
        id
    }
}
/**
 * 1st thunk creator
 */
export function createUser(user) {

    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    return (dispatch) => {
        // 1st dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(requestBegin());

        //2nd Ajax: call to the api
        axios.post(endpoint, user, { timeout: 3000 })
        .then((json) => {
            // Notify that we have received the data
            dispatch(requestSuccess(json));

        }).catch((json) => {
            // Notify of any failure from the request
            dispatch(requestFailed(json));

        });

    };

}

export function retrieveUser(id) {
  // TODO returns user data
  return {
    type: RETRIEVE_USER,
    id
  }
}

export function updateUser(id) {
    const url = `${endpoint}/${id}`
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.
    console.log('url: ', url)
    return (dispatch) => {
        // 1st dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(requestBegin());

        //2nd Ajax: call to the api
        axios.post(endpoint, user, { timeout: 3000 })
        .then((json) => {
            // Notify that we have received the data
            dispatch(requestSuccess(json));

        }).catch((json) => {
            // Notify of any failure from the request
            dispatch(requestFailed(json));

        });

    };
}

export function deleteUser(id) {
  // TODO delete user and return a confirmation
  return {
    type: DELETE_USER,
    id
  }
}

export function loginUser(email, password) {
  return {
    type: LOGIN_USER,
    email,
    password
  }
}

export function logoutUser(email, password) {
  return {
    type: LOGIN_USER,
    email,
    password
  }
}

function requestBegin() {
    return {
        type: REQUEST_BEGIN
    };
}

function requestFailed(payload) {
    return { payload, type: REQUEST_FAILED };
}

function requestSuccess(payload) {
    return { payload, type: REQUEST_SUCCESS };
}
