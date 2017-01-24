import React from 'react';
import Navigation from './navigation.js';

export default React.createClass({
    displayName: 'App',
    render() {
        return (
            <div className="container">
                <Navigation />
                { this.props.children }
           </div>
        );
    }
})
