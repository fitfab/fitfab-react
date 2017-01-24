import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    displayName: 'navigation',
    render() {
        return(
            <div className="top-navigation">
                <Link to="/">fitfab</Link>
                <Link to="/products">Products</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        )
    }
})
