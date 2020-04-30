import  React, {useState} from 'react';
import NavLink from './NavLink';
import InputForm from './InputForm'

import StaffList from './StaffList'
import './Table.css'
function Table(){

return(
    
    <div>
      <NavLink/>
          <h1 className="Table">Table</h1>
          <StaffList/> 
          <br/>
          <InputForm />
          <br/>
        </div>
  )  
} 

export default Table 