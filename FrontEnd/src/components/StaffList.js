import React, { useEffect }  from 'react';
import StaffCard from './StaffCard'
import './StaffList.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

const StaffList = (props)=>{
    console.log('props page: ' + props.page)
    
    const staffs = useSelector(state => state.staff);
    const dispatch = useDispatch();
    const getStaffs = async () => {
        const result = await axios.get(`http://localhost/api/staffs`)
       
        const action = {type:'GET_STAFFS',staff: result.data}
        dispatch(action)
      }
      useEffect(() => {
        getStaffs()
      }, [])
       console.log("data",staffs)
      if (!staffs || !staffs.length)
        return (<h2>No data</h2>)

    return(
        <div >
            {
                staffs.map((staff, index) => (
                    <ul key={index} style={{ margin: 5 }}>
                        <StaffCard  page={props.page} {...staff}  />
                    </ul>
                ))
            }
        </div>
    )
}
export default StaffList