import React, { Component } from 'react';
import config from '../firebase/config';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Table from './Table'
import About from './About'
import './Home.css';
import NavLink from './NavLink';



class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        config.auth().signOut();
    }

    render() {
        return (
        <Router>
        <div className=" ">
        <NavLink />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Table" exact component={Table} />
        <button type="button" onClick={this.logout}>Logout</button>            
        </Switch>
        </div>
        </Router>
        
        );
    }
}

export default Home ;