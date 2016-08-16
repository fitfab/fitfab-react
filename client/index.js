import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes.js';

// Grab the element from the html
const root = document.getElementById('app');

/**
 * Rendering the app on the app container
 */
 render(<Router history={ browserHistory } routes={ routes } />, root);
