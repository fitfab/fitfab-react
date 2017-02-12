import React, { PropTypes } from 'react';

export default React.createClass({
    displayName: 'UserDetail',
    propTypes: {
        user: PropTypes.object
    },

    render() {
        const { user } = this.props;
        return (
            <ul className="user-detail">
                <li id={user._id}>
                    <span className="user-detail__label">Member:</span> {user.firstName} {user.lastName}
                </li>
                <li><span className="user-detail__label">Email:</span> {user.email}</li>

            </ul>
        )
    }
})
