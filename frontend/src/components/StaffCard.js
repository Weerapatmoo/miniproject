import React, { useEffect }  from 'react';
import './StaffList.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const StaffCard = (props)=>{
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)

    const getStaffs = async () => {
        const result = await axios.get(`http://localhost/api/staffs`)
       
        const action = {type:'GET_STAFFS',staff: result.data}
        dispatch(action)
      }
      useEffect(() => {
        getStaffs()
      }, [])

    const deleteStaff = async ()=>{
        await axios.delete(`http://localhost/api/staffs/${props.no}`)
        dispatch({type:'DELETE_STAFF',no: props.no })
        getStaffs()
          
    }
    const updateStaff = async () => {
        await axios.put(`http://localhost/api/staffs/${props.no}`,form)
         dispatch(
             {type:'UPDATE_STAFF',
             no: props.no,
             staff:{...form, no:  props.no}
         })
         getStaffs()
         
       }
         
    console.log('props for page : '  + props.page )

    const renderFunction = () => {
      if(props.page === "Home"){
        return (
          <tr>
            <td>{props.firstname}</td>
            <td>{props.lastname}</td>
            <td>{props.day}</td>
            <td>{props.tel}</td>
          </tr>
        )
      }else{
        return (<tr>
            <td>{props.firstname}</td>
            <td>{props.lastname}</td>
            <td>{props.day}</td>
            <td>{props.tel}</td>
            <button onClick={deleteStaff}>Delete</button>
            <button onClick={updateStaff}>Update</button>
          </tr>
          
        )
      }
    }  
    
    const renderHeadTable = () => {
      if(props.page === "Home" || props.page === 'Home'){
        return (
          <tr>
          <th>FirstName</th>
          <th>Lastname</th>
          <th>Day</th>
          <th>Tel.</th>
          
        </tr>)

      }else{
        return (
        <tr>
            <th>FirstName</th>
            <th>Lastname</th>
            <th>Day</th>
            <th>Tel.</th>
            <th>Edit</th>
          </tr>
        )
    }
    
  }
    return(
        <div >
          <table id="customers">
            {renderHeadTable()}
            {renderFunction()}
          </table>
        </div>
    )


}
       
    
    // return(
    //     <div >
    //       <table id='customers' > 
    //         <tr>
    //         <td>{props.firstname}</td> 
    //         <td>{props.lastname}</td>
    //         <td>{props.day}</td> 
    //         <td>{props.tel}</td>

    //       <button onClick={deleteStaff}>Delete</button>
    //       <button onClick={updateStaff}>Update</button>

    //       </tr>
    //       </table>
    //   </div>
    // )
    // }

export default StaffCard
