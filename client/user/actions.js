import axios from 'axios';
import firebase from 'firebase';
import firebaseConfig from './../firebase.config.js';

import {
  CREATE_USER,
  RETRIEVE_USER,
  UPDATE_USER,
  DELETE_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REQUEST_BEGIN,
  REQUEST_FAILED,
  REQUEST_SUCCESS
} from './actionTypes.js';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export function loginUser(user) {
  return function(dispatch){
    dispatch(requestBegin());
    auth.signInWithEmailAndPassword(user.email, user.password)
  }
}

export function logoutUser(user) {
  return function(dispatch){
    dispatch(requestBegin());
    auth.signOut();
  }
}

export function verifyUser() {

  return function(dispatch){
    auth.onAuthStateChanged(user => {
        console.log('verifyUser')
        if (user) {
            dispatch(requestSuccess(user));
        } else {
            dispatch(requestSuccess(user));

        }
    });
  }
}

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

    return function (dispatch) {

        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(requestBegin());

        auth.createUserWithEmailAndPassword(user.email, user.password)
          .catch( error => {
          // Handle Errors here.
          dispatch(requestFailed(error));
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

// export function logoutUser(payload) {
//   return {
//     payload,
//     type: LOGOUT_USER,
//   }
// }

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
