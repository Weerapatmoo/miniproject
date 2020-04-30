import React, { useState, useEffect } from 'react';
import NavLink from './NavLink'
import auth from '../firebase';

// function About() {
  
  const About = () => {
    const [session, setSession] = useState({
      isLoggedIn: false,
      currentUser: null,
      errorMessage: null
    });
    console.log("session: " + session.isLoggedIn)
    useEffect(() => {
      const handleAuth = auth.onAuthStateChanged(user => {
        if (user) {
          setSession({
            isLoggedIn: true,
            currentUser: user,
            errorMessage: null
          });
        }
      });
  
      return () => {
        handleAuth();
      };
    }, []);
   
  
    const handleLogout = () => {
      auth.signOut().then(response => {
        setSession({
          isLoggedIn: false,
          currentUser: null
        });
      });
    };
  return (
    <div>
      <NavLink></NavLink>
      <div className="has-text-centered">
        <section class="hero is-danger">
          <div className="container">
            <h1 className="title">About</h1>
          </div>
          <div>
          <button onClick={handleLogout}>logout</button>
          </div>
        </section>
      </div>
    </div>

  )
}

  

export default About 