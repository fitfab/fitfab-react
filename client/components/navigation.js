import React from 'react';
import { Link } from 'react-router';

/**
 * At line #15
 * POC: catching the current location and storing it to later
 * use it to redirect user to previous page.
 * @type {String}
 */

export default React.createClass({
    displayName: 'navigation',
    render() {
        return(
            <div className="top-navigation">
                <Link onlyActiveOnIndex activeClassName="top-navigation__active" to="/">fitfab</Link>
                <Link
                    activeClassName="top-navigation__active"
                    to={{
                        pathname: '/products',
                        query: { prevPage: window.location.href}
                    }}>Products</Link>
                <Link activeClassName="top-navigation__active" to="/signup">Sign Up</Link>
            </div>
        )
    }
})
