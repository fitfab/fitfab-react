import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';

// Grab the element from the html
const root = document.getElementById('app');

/**
 * Rendering the app on the app container
 */
 render(<App />, root);
