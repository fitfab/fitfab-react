import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    displayName: 'navigation',
    render() {
        console.log(this.props)
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
