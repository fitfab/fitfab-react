import React, { PropTypes } from 'react';
export default React.createClass({
    displayName: 'profile',
    propTypes: {
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        ability: PropTypes.string,
    },
    render() {
        const { firstName, lastName, ability} = this.props;
        return(
            <div className="block">
                <div className="profile">

                    <h2>{firstName} {lastName}</h2>
                    <p>{ability}</p>

                </div>
            </div>
        );
    }
});
