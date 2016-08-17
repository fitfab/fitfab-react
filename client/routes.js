import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import Greetings from './components/Greetings.js';
import SignUpPage from './components/signup/SignUpPage.js';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={Greetings} />
      <Route path="/signup" component={SignUpPage} />
    </Route>
)