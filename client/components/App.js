import React, { PropTypes } from 'react';
import Navigation from './navigation.js';

export default React.createClass({

    displayName: 'App',

    propTypes: {
        children: PropTypes.node
    },

    render() {
        return (
            <div className="container">
                <Navigation />
                { this.props.children }
           </div>
        );
    }
})
