import React from 'react';
import SignUpForm from './SignUpForm.js';

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
    if(this.props.user.credentials) {
      console.log(this.props.user)
      return (<a href="#" onClick={this.handleLogOut} >log out</a>);
    }

  },
  render() {
    return (
      <div>
        <h1>User Area {this.renderLogout()}</h1>
        <SignUpForm { ...this.props } />
      </div>
    )
  }
})
