import React, { useState, useEffect } from 'react';
import Login from './Login'
import auth from '../firebase'; 
import NavLink from './NavLink';

import './Home.css';
import StaffList from './StaffList';


const Home = () => {
  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null
  });

  const page = 'Home'
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
       {session.isLoggedIn ? (
        // หลัง loginเสร็จ
        <div>
          <div className = 'Home'>
            <NavLink/>
            <h1>
            <b>HOME</b></h1>
              
            </div>
            <div>
            <StaffList page={page}/>
              <button  onClick={handleLogout}>logout</button>
            </div>
        </div>
        
      ) : ( //   ยังไม่ได้ login
        <div>
          <Login setSession={setSession} />
        </div>
        
      )}
</div>
       
  )
}
export default Home