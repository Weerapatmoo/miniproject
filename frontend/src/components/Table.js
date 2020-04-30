import  React, {useState} from 'react';
import NavLink from './NavLink';
import InputForm from './InputForm'
import StaffCard from './StaffCard'
import StaffList from './StaffList'
function Table(){

    const [page] = useState('Table')

return(
    
    <div>
      <NavLink/>
          <h1 className="title">Table</h1>
          <StaffList page={page}/> 
          <br/>
          <InputForm />
          <br/>
        </div>
  )  
}

export default Table 