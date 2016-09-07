import React from 'react';

export default React.createClass({
  render(){
    console.log('This Products Props : ', this.props);
    return (
      <h2>Product Page Component</h2>
    )
  }
})
