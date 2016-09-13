import React from 'react';
import SignUpForm from './SignUpForm.js';

require('./user.less');
// This component acts as the top dum level component
// Here we choose to render whether the user is login or
// not -- render logout button, signup form or login.

export default React.createClass({
  render() {
    return (
      <div>
        <h1>User Area</h1>
        <SignUpForm { ...this.props } />
      </div>
    )
  }
})
