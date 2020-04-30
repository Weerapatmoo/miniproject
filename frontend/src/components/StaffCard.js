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
       const renderFunction = () => {
        if(props.page === "Table"){
    return(
            <tr>
              <td>{props.firstname}</td>
              <td>{props.lastname}</td>
              <td>{props.day}</td>
              <td>{props.tel}</td>
              <button onClick={deleteStaff}>Delete</button>
              <button onClick={updateStaff}>Update</button>
            </tr>
        )
    }else{
        return(
            <tr>
            <td>{props.firstname}</td>
            <td>{props.lastname}</td>
            <td>{props.day}</td>
            <td>{props.tel}</td>
            </tr>
        )
      }
    }
    const renderHeadTable = () => {
        if(props.page === "Table" || props.page === 'table'){
          console.log(props.table);
          
          return (
            <tr>
              <th>FirstName</th>
              <th>Lastname</th>
              <th>Day</th>
              <th>Tel.</th>
              <th>Edit</th>
            </tr>
            )
        }else{
          return (
          <tr>
            <th>FirstName</th>
            <th>Lastname</th>
            <th>Day</th>
            <th>Tel.</th>
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
export default StaffCard
