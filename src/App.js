import React, { Component } from 'react';
import './App.css';

import config from './firebase/config';
import Home from './Home';
import Login from './components/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      user: {},
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    config.auth().onAuthStateChanged((user) => {
     // console.log(user);
      if (user) {
        this.setState({ user });
       // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        //localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.user ?  ( < Home/>) : (< Login />)};
      </div>
    )
  }
}
export default App;