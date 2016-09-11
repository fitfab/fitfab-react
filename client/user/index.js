// The module index is responsible for maintaining its public API.
// This is the exposed surface where modules
// can interface with each other.

import * as actions from './actions.js';
import UserContainer from './container.js';
import * as constants from './constants.js';
import * as reducer from './reducer.js'

export default {
  actions,
  UserContainer,
  constants,
  reducer
}
