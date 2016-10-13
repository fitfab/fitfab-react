import React from 'react';

require('./user.less');

export default React.createClass({
  render() {
    return(
      <div>
        <strong>{this.props.user.credentials.email} </strong>
        <a href="#" onClick={this.props.handleLogOut} >log out</a>
      </div>
    )
  }
})
