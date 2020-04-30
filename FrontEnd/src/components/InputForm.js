import React from 'react';
import './InputForm.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const InputForm = (props) => {
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const staffs = useSelector(state => state.staff)

    const addStaff = async () => {
        await axios.post(`http://localhost/api/staffs`, form)
        dispatch({
            type: 'ADD_STAFF', staff: {
                id: staffs.length > 0 ? staffs[staffs.length-1].id+1 : 0,
                ...form
            }
        })
    }

    
    return (
    <div className ="input">
            <div class="input2">
            <table>
                <h1>Add Staffs</h1>
                    {form.firstname} {form.lastname} {form.day} {form.tel} 
                            <tbody>
                                <tr> 
                                    <td>
                                        <input className='inpt'
                                        type="text"
                                        onChange={(e) => dispatch({ type: 'CHANGE_FIRSTNAME', firstname: e.target.value })}    
                                        placeholder="FirstName"/>
                                    </td>
                                </tr>
                                <tr> 
                                    <td>
                                        <input className='inpt'
                                        type="text"
                                        onChange={(e) => dispatch({ type: 'CHANGE_LASTNAME', lastname: e.target.value })}
                                        placeholder="Lastname"/>  
                                    </td>
                                </tr>
                                <tr> 
                                    <td>
                                        <input className='inpt'
                                        type="text"
                                        onChange={(e) => dispatch({ type: 'CHANGE_DAY', day: e.target.value })}
                                        placeholder="Day"/>   
                                    </td>
                                </tr>
                                <tr>
                        
                                    <td>
                                        <input className='inpt'
                                        type="text"
                                        onChange={(e) => dispatch({ type: 'CHANGE_TEL', tel: e.target.value })}
                                        placeholder="Tel"/>  
                                    </td>
                                </tr>
                                <tr>
                        
                                    <td>
                                        <button className='btn' onClick ={addStaff}>..CREATE..</button>
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            
            
      </div>
    )
}

export default InputForm