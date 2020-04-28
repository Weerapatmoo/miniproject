import React, { Component } from 'react';
import firebase from 'firebase'; 




const auth = firebase.auth
const provider = new firebase.auth.FacebookAuthProvider();

class Facabook extends Component {
  constructor(props){
  super(props);
  this.state = {user:null}
  } 
  login = () => {
    var that = this;
    const result = auth().signInWithPopup(provider).then(function(result) {
      var user = result.user;
      console.log(user);
      that.setState({user: user});
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  
  renderName = () => {
    const {user} = this.state
    
  }
  render() {
    return (
      <div className="App">
        
          {this.renderName()}
          <button onClick={this.login}>Login with Facebook</button>
      </div>
    );
  }
}
export default Facabook;