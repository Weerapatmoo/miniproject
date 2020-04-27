import React, { Component } from 'react';
import fig from './firebase/Config';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fig.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fig.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }

  render() {
  return (
    <div className = "login">

      <input type="email" placeholder="Email" onChange={this.handleChange} />
      <input type="password" placeholder="Password" onChange={this.handleChange} />

      <button type="button" onClick={this.login}>
        Login
      </button>

      <button type="button" onClick={this.signup}>
        Register
      </button>
    </div>
  );
};
}

export default Login