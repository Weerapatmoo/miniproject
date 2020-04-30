import React, { useState, useEffect } from 'react';
import Login from './Login'
import auth from '../firebase'; 
import NavLink from './NavLink';
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
          <div>
            <NavLink/>
              <div className="has-text-centered">
              <section class="hero is-danger">
              <div className="container">
              <h1 className="title">Home</h1>
              </div>
              </section>
              </div>
          </div>
            <div>
              <StaffCard/>
              <button onClick={handleLogout}>logout</button>
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