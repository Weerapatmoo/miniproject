import React from 'react'
import {Link} from 'react-router-dom';



function NavLink(){
    const navStyle = {
        color: 'white'
    };
    
    return(
        <nav>
          <h3>CCTV</h3>
          <ul className = "nav-links">
              <Link style={navStyle} to='./About'>
                  <li>About</li>
              </Link>
              <Link style={navStyle} to='./Table'>
                  <li>Table</li>
              </Link>
              <Link style={navStyle} to='./Works'>
                  <li>Works</li>
              </Link>
          </ul>
        </nav>
    );
}
export default NavLink