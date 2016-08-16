import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return(
      <div>
        <Link to="/">fitfab</Link> | <Link to="/signup">Sign Up</Link>
      </div>
    )
  }
})
