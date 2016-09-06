import {
    REQUEST_BEGIN,
    REQUEST_SUCCESS,
    REQUEST_FAILED
} from './actionTypes.js';

export const quickView = (id) => ({
  type: QUICK_VIEW,
  payload: { id }
})

export const requestBegin = () =>  ({
    type: REQUEST_BEGIN
})

export const requestSuccess = (payload) => ({
    payload,
    type: REQUEST_SUCCESS
})

export const requestFailed = (payload) => ({
    payload,
    type: REQUEST_FAILED
})
