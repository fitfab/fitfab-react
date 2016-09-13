import {
  CREATE_USER,
  RETRIEVE_USER,
  UPDATE_USER,
  DELETE_USER,
  LOGIN_USER,
  REQUEST_BEGIN,
  REQUEST_SUCCESS,
  REQUEST_FAILED
} from './actionTypes.js';

const userInitialState = {
  errors: [],
  isFetching: false,
  fetchComplete: false,
  user: null,
  userLogedin: false,
};

export default (state, action ) => {
  let nextState;

  switch( action.type ) {

    case REQUEST_BEGIN:
      nextState = { isFetching: true };
      state = Object.assign({}, state, nextState)
      break;

    case REQUEST_SUCCESS:
      nextState = {
          isFetching: false,
          list: action.payload.results
      };
      state = Object.assign({}, state, nextState)
      break;

    case REQUEST_FAILED:
      nextState = {
          isFetching: false,
          errors: action.payload
      };
      state = Object.assign({}, state, nextState)
      break;

    case CREATE_USER:
      nextState = { isFetching:true };
      state = Object.assign({}, state, nextState);
      break;

    case RETRIEVE_USER:
      nextState = { isFetching:true };
      state = Object.assign({}, state, nextState);
      break;

    case UPDATE_USER:
      nextState = { isFetching:true };
      state = Object.assign({}, state, nextState);
      break;

    case DELETE_USER:
      nextState = { isFetching:true };
      state = Object.assign({}, state, nextState);
      break;

    case LOGIN_USER:
      nextState = { isFetching:true };
      state = Object.assign({}, state, nextState);
      break;

    default:
      state = userInitialState;
      break;

  };
  return state;
}
