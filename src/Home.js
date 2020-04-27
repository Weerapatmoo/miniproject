import React, { Component } from 'react';
import fig from './firebase/Config';


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

    <div className="Home">
        <h1>CCTV</h1>
        
        <button type="button" onClick={this.logout}>Logout</button>
        
    </div>

  );
}
}
  
export default Home