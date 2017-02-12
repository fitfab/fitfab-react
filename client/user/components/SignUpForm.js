import React, { PropTypes } from 'react';
import { cleanUser } from './../constants.js';
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
        return cleanUser;
    },

    componentWillReceiveProps(nextProps) {
        let errors = {};
        if (nextProps.user.errors) {
            errors = nextProps.user.errors;
            this.setState({ errors });
            return;
        }
        this.setState({ errors });

        if (nextProps.user.user._id) {
            this.setState(cleanUser)
        }
    },

    showError(error) {
        //console.log(error)
        if (!error) {
            return null;
        }
        return (
            <span className="input-error">{error}</span>
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
          <label>{ this.showError(errors && errors.firstName) }</label>
          <input
            placeholder="First Name:"
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            />

        </div>

        <div>
          <label>{ this.showError(errors && errors.lastName) }</label>
          <input
            placeholder="Last Name:"
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            />

        </div>

        <div>
          <label>{ this.showError(errors && errors.email) }</label>
          <input
            placeholder="User Email:"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            />

        </div>

        <div>
          <label>{ this.showError(errors && errors.password) }</label>
          <input
            placeholder="User PassWord:"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            />

        </div>

        <div>
          <label>{ this.showError(errors && errors.passwordConfirm) }</label>
          <input
            placeholder="Confirm Password:"
            type="password"
            name="passwordConfirm"
            value={this.state.passwordConfirm}
            onChange={this.handleChange}
            />

        </div>

        <div>
          <input
            type="submit"
            value="Create Account"
            />
        </div>

      </form>
    );
  }
});
