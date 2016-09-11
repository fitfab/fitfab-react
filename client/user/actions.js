import axios from 'axios';

import {
  CREATE_USER,
  RETRIEVE_USER,
  UPDATE_USER,
  DELETE_USER,
  LOGIN_USER
} from './actionTypes.js';

export function createUser(userData) {
  // TODO save user info
  return dispatch => {
    return axios.post('/api/users', userData )
  }
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
