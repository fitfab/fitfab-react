import React, { PropTypes } from 'react';
import Profile from './profile.js';
import members from './../data.js';
require('./products.less');
export default React.createClass({

    displayName: 'products',
    propTypes: {
        location: PropTypes.object
    },

    /**
     * renderBackButton POC for redirect base on the query param passed into
     * the props location.
     * @return {[element]}
     */
    renderBackButton() {
        const { query } = this.props.location;
        return (query && query.prevPage) && (<a className="prev-page" href={query.prevPage}>back</a>)
    },

    render(){
        return (
            <div className="members-container">
                { this.renderBackButton() }
                {members.map(profile => {
                    return <Profile key={profile.lastName} {...profile} />
                })}
            </div>
        );
    }
});
