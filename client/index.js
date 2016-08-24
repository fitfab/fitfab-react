import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import routes from './routes.js';

// create store
const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
)

// Grab the element from the html
const root = document.getElementById('app');

/**
 * Rendering the app on the app container
 */
 render(
   <Provider store={store}>
    <Router history={ browserHistory } routes={ routes } />
   </Provider>, root);
