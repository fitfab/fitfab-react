import React, { PropTypes } from 'react';
import SignUpForm from './SignUpForm.js';
import UserDetail from './UserDeatil.js';

require('./user.less');
// This component acts as the top dum level component
// Here we choose to render whether the user is login or
// not -- render logout button, signup form or login.

export default React.createClass({
    displayName: 'User',

    propTypes: {
        user: PropTypes.object
    },

    componentDidMount() {

    },

    render() {
        const { user } = this.props;
        return (
            <div>
                <h1>User Area</h1>
                { user.user ? <UserDetail { ...user} /> : <SignUpForm { ...this.props } /> }
            </div>
        );
    }
});
