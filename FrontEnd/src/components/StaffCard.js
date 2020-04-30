import React, { useEffect }  from 'react';
// import './StaffList.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const StaffCard = (props)=>{
    console.log('page: ' + props.page)
    console.log('my props: ' + props.Firstname)
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
        await axios.delete(`http://localhost/api/staffs/${props.id}`)
        dispatch({type:'DELETE_STAFF',no: props.id })
        getStaffs()
          
    }
    const updateStaff = async () => {
        await axios.put(`http://localhost/api/staffs/${props.id}`,form)
         dispatch(
             {type:'UPDATE_STAFF',
             no: props.id,
             staff:{...form, id:  props.id}
         })
         getStaffs()

    }
    const renderFunction = () => {
        if(props.page === "Admin"){
    return(
            <tr>
              <td>{props.Firstname}</td>
              <td>{props.Lastname}</td>
              <td>{props.Day}</td>
              <td>{props.Tel}</td>
              <button onClick={deleteStaff}>Delete</button>
              <button onClick={updateStaff}>Update</button>
            </tr>
        )
    }else{
        return(
            <tr>
            <td>{props.Firstname}</td>
            <td>{props.Lastname}</td>
            <td>{props.Day}</td>
            <td>{props.Tel}</td>
            </tr>
        )
      }
    }
    const renderHeadTable = () => {
        if(props.page === "Admin" || props.page === 'admin'){
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