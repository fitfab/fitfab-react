import React from 'react';
import SignUpForm from './SignUpForm.js';
import UserProfile from './UserProfile.js';

require('./user.less');
// This component acts as the top dum level component
// Here we choose to render whether the user is login or
// not -- render logout button, signup form or login.

export default React.createClass({

  componentDidMount() {
    this.props.userActions.verifyUser();
  },
  handleLogOut(event) {
    event.preventDefault();
    this.props.userActions.logoutUser();
  },
  renderLogout() {
    let view = null;
    if(this.props.user.credentials) {
      view = (<UserProfile {...this.props} handleLogOut={this.handleLogOut} />);
    } else {
      view = (<SignUpForm { ...this.props } />)
    }
    return view;
  },
  render() {
    return (
      <div>
        <h1>User Area</h1>
        {this.renderLogout()}

      </div>
    )
  }
})
