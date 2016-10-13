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



export function verifyUser() {
  return function(dispatch){
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log('user logedIn: ',user)
            dispatch(requestSuccess(user));
        } else {
            console.log('user is not Logged in: ',user);
            dispatch(requestFailed(null));

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

        const promise = auth.createUserWithEmailAndPassword(user.email, user.password);
        promise
          .then( user => {
            console.log('user', user)
            dispatch(requestSuccess(user));
          })
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

export function loginUser(email, password) {
  return {
    type: LOGIN_USER,
    email,
    password
  }
}

export function logoutUser(email, password) {
  return {
    type: LOGOUT_USER,
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
    console.log('requestSuccess', payload)
    return { payload, type: REQUEST_SUCCESS };
}
