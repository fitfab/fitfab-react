import React from 'react';
import SignUpForm from './SignUpForm.js';
import { connect } from 'react-redux';
import { userSignupRequest} from './actions.js';

require('./SignUpPage.less');

const SignUpPage = React.createClass({
  propTypes: {
    userSignupRequest: React.PropTypes.func.isRequired
  },

  render() {
    const { userSignupRequest } = this.props
    return (
      <SignUpForm userSignupRequest={userSignupRequest} />
    )
  }
});

export default connect((state) => { return {} }, { userSignupRequest })(SignUpPage);
