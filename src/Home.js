import React, { Component } from 'react';
import fig from './firebase/fig';
import { NavLink } from 'react-router-dom'
import Routing from './routes'

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fig.auth().signOut();
        
    }

    render() {
        return (

            <div className="my-app">
                    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
                    <div className="container">
                        <div className="navbar-brand">
                        <a className="navbar-item" href="https://devahoy.com">
                            <img src={process.env.PUBLIC_URL + '/images/devahoy-text-logo.png'} alt="DEVAHOY LOGO" width="112" height="28" />
                        </a>
                        </div>
                        <div className="navbar-menu">
                        <div className="navbar-end">
                            <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
                            <NavLink to="/Table" activeClassName="is-active" className="navbar-item">Table</NavLink>
                            <NavLink to="/Works" activeClassName="is-active" className="navbar-item">Works</NavLink>
                            <NavLink to="/About" activeClassName="is-active" className="navbar-item">About</NavLink>
                            <a className="navbar-item" href="https://github.com/phonbopit" target="_blank">Star on <i className="fab fa-github"></i></a>
                        </div>
                        </div>
                    </div>
                    </nav>
                    <Routing />
                    <button type="button" onClick={this.logout}>Logout</button>
                </div>

        );
    }
}

export default Home