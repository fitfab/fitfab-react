import axios from 'axios';
import firebase from 'firebase';
import firebaseConfig from './../firebase.config.js';

import {
  CREATE_USER,
  RETRIEVE_USER,
  UPDATE_USER,
  DELETE_USER,
  LOGIN_USER,
  REQUEST_BEGIN,
  REQUEST_FAILED,
  REQUEST_SUCCESS,
  endpoint,
} from './actionTypes.js';

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();

/**
 * 1st thunk creator using firebase as
 * the database
 *
 * http://rackt.org/redux/docs/advanced/AsyncActions.html
 */
export function createUser(user) {

    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    return (dispatch) => {
      // 1st dispatch: the app state is updated to inform
      // that the API call is starting.
        dispatch(requestBegin());

        // 2nd Ajax: call to the api
        axios.post(endpoint, user, { timeout: 3000 })
        .then((response) => {
          console.log('requestSuccess: ',response);
            // Notify that we have received the data
            dispatch(requestSuccess(response));

        }).catch((response) => {
            console.log('requestFailed: ',response);
            // Notify of any failure from the request
            dispatch(requestFailed(response));

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
  return {
    type: UPDATE_USER,
    id
  }
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
