import React, { useState, useEffect } from 'react';
import Login from './Login'
import auth from '../firebase'; 
import NavLink from './NavLink';
import StaffList from './StaffList'
import StaffCard from './StaffCard';
const Home = () => {
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
      {session.isLoggedIn ? (
        // หลัง loginเสร็จ
        <div>
        <NavLink/>
        <div>123</div>
        <StaffCard/>
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