import {
    EDIT_USER,
    RETRIEVE_USER,
    UPDATE_USER,
    DELETE_USER,
    LOGIN_USER,
    REQUEST_BEGIN,
    REQUEST_SUCCESS,
    REQUEST_FAILED
} from './actionTypes.js';

const userInitialState = {
    errors: {},
    isFetching: false,
    fetchComplete: false,
    fetchFailed: false,
    user: null,
    userLogedin: false
};

export default (state, action ) => {
    let nextState;

    switch( action.type ) {

        case EDIT_USER:
            nextState = {
                editUser: true,
                id: action.id
            };
            state = Object.assign({}, state, nextState)
            break;

        case REQUEST_BEGIN:
            nextState = { isFetching: true };
            state = Object.assign({}, state, nextState)
            break;

        case REQUEST_SUCCESS:
            nextState = {
                isFetching: false,
                fetchComplete: true,
                fetchFailed: false,
                errors: null,
                user: action.payload.data.user
            };
            state = Object.assign({}, state, nextState)
            break;

        case REQUEST_FAILED:
            nextState = {
                isFetching: false,
                fetchComplete: false,
                fetchFailed: true,
                errors: action.payload.response.data.errors
            };
            state = Object.assign({}, state, nextState)
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

    }
    return state;
}
