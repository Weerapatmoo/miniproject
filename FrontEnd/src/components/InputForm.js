import React from 'react';
// import './InputForm.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const InputForm = props => {
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const Staffs = useSelector(state => state.Staff)

    const addStaff = async () => {
        await axios.post(`http://localhost/api/Staffs`, form)
        dispatch({
            type: 'ADD_STAFF', Staff: {
                no: Staffs.length > 0 ? Staffs[Staffs.length-1].no+1 : 0,
                ...form
            }
        })
    }

    
    return (
    <div className ="input">
            <div class="input2">
            <table>
                <h1>Add Staffs</h1>
                    {form.Firstname} {form.Lastname} {form.Day} {form.Tel} 
                            <tbody>
                                <tr> 
                                    <td>
                                        <input className='inpt'
                                        type="text"
                                        onChange={(e) => dispatch({ type: 'CHANGE_FIRSTNAME', Firstname: e.target.value })}    
                                        placeholder="FirstName"/>
                                    </td>
                                </tr>
                                <tr> 
                                    <td>
                                        <input className='inpt'
                                        type="text"
                                        onChange={(e) => dispatch({ type: 'CHANGE_LASTNAME', Lastname: e.target.value })}
                                        placeholder="Lastname"/>  
                                    </td>
                                </tr>
                                <tr> 
                                    <td>
                                        <input className='inpt'
                                        type="text"
                                        onChange={(e) => dispatch({ type: 'CHANGE_DAY', Day: e.target.value })}
                                        placeholder="Day"/>   
                                    </td>
                                </tr>
                                <tr>
                        
                                    <td>
                                        <input className='inpt'
                                        type="text"
                                        onChange={(e) => dispatch({ type: 'CHANGE_TEL', Tel: e.target.value })}
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