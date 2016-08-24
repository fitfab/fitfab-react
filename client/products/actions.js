import types from './actionTypes.js';

export const quickView = (id) => ({
  type: types.QUICK_VIEW,
  payload: { id }
})
