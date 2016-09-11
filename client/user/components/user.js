import React from 'react';
import SignUpForm from './SignUpForm.js';

require('./user.less');

export default React.createClass({
  render() {
    console.log('user props: ', this.props)
    return (
      <div>
        <h1>User Area</h1>
        <SignUpForm />
      </div>
    )
  }
})
