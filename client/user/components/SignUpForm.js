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

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    })
  },

  handleSubmit(e) {
    e.preventDefault();
    const { name } = e.target;
    console.log('input:', name, e.target, e.currentTarget);
    this.props.userActions[name](this.state);
  },

  componentWillReceiveProps(nextProps){

    if(nextProps.user.credentials == null){
      console.log('componentWillReceiveProps: ',nextProps.user)
      this.setState(this.getInitialState());
    }
  },

  render() {
    return(
      <form>
        <p>Please fill all input fields.</p>
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
            value="log in"
            name="loginUser"
            onClick={this.handleSubmit}
            />
          <input
            type="submit"
            value="sign up"
            name="createUser"
            onClick={this.handleSubmit}
            />
        </div>

      </form>
    );
  }
})
