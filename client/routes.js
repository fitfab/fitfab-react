import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import Greetings from './components/Greetings.js';
import User from './user';
import Products from './products';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={Greetings} />
      <Route path="/signup" component={User.UserContainer} />
      <Route path="/products" component={Products.ProductContainer} />
    </Route>
)
