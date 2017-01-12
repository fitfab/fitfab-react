import React from 'react';

export default React.createClass({

  propTypes: {

    userActions: React.PropTypes.shape({
      createUser: React.PropTypes.func.isRequired,
      deleteUser: React.PropTypes.func.isRequired,
      loginUser: React.PropTypes.func.isRequired,
      logoutUser: React.PropTypes.func.isRequired,
      updateUser: React.PropTypes.func.isRequired
    })


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

  showError(error) {
    console.log(error)
    if (!error) {
      return null
    }
    return (
      <p className="input-error">{error}</p>
    )
  },

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    })
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.userActions.createUser(this.state)
  },

  render() {
    const { errors } = this.props.user;
    return(
      <form onSubmit={this.handleSubmit}>
        <p>Please fill all input fields.</p>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            />
          { this.showError(errors.lastName) }
        </div>

        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            />
          { this.showError(errors.lastName) }
        </div>

        <div>
          <label>User Email: </label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            />
          { this.showError(errors.email) }
        </div>

        <div>
          <label>User PassWord: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            />
          { this.showError(errors.password) }
        </div>

        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="passwordConfirm"
            value={this.state.passwordConfirm}
            onChange={this.handleChange}
            />
          { this.showError(errors.passwordConfirm) }
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
