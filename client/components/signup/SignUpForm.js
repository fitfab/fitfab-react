import React from 'react';
import axios from 'axios';

export default React.createClass({

  propTypes: {
    userSignupRequest: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: ''
    };
  },

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    })
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  },

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up Page</h1>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            />
        </div>

        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            />
        </div>

        <div>
          <label>User Email: </label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            />
        </div>

        <div>
          <label>User PassWord: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            />
        </div>

        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="passwordConfirm"
            value={this.state.passwordConfirm}
            onChange={this.handleChange}
            />
        </div>

        <div>
          <input
            type="submit"
            value="Save"
            />
        </div>

      </form>
    );
  }
})
