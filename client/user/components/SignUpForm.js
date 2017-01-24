import React, { PropTypes } from 'react';
import validateUser from './../../../shared/validateUser.js';

export default React.createClass({
    displayName: 'SignUpForm',
    propTypes: {
        user: PropTypes.object,
        userActions: PropTypes.shape({
            createUser: PropTypes.func.isRequired,
            deleteUser: PropTypes.func.isRequired,
            loginUser: PropTypes.func.isRequired,
            logoutUser: PropTypes.func.isRequired,
            updateUser: PropTypes.func.isRequired
        })
    },

    getInitialState() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: '',
            errors: {}
        };
    },

    showError(error) {
        //console.log(error)
        if (!error) {
            return null;
        }
        return (
            <p className="input-error">{error}</p>
        );
    },

    handleChange(e) {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        });
    },

    isValid() {
        const { errors, isValid } = validateUser(this.state);
        if(!isValid){
            this.setState({ errors })
        }
        return isValid;
    },

    handleSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {} })
            this.props.userActions.createUser(this.state);
        }
    },

  render() {
    const { errors } = this.state;
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
        { this.showError(errors && errors.firstName) }
        </div>

        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            />
          { this.showError(errors && errors.lastName) }
        </div>

        <div>
          <label>User Email: </label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            />
          { this.showError(errors && errors.email) }
        </div>

        <div>
          <label>User PassWord: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            />
          { this.showError(errors && errors.password) }
        </div>

        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="passwordConfirm"
            value={this.state.passwordConfirm}
            onChange={this.handleChange}
            />
          { this.showError(errors && errors.passwordConfirm) }
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
});
