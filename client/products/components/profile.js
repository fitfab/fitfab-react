import React from 'react';
export default React.createClass({
    displayName: 'profile',
    render() {
        const { firstName, lastName, ability} = this.props;
        return(
            <div className="grid grid--4th">
                <div className="profile">
                    <h2>{firstName} {lastName}</h2>
                    <p>{ability}</p>
                </div>
            </div>
        );
    }
});
