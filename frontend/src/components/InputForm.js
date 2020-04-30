import React from 'react';
import './InputForm.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const InputForm = props => {
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const staffs = useSelector(state => state.staff)

    const addStaff = async () => {
        await axios.post(`http://localhost/api/staffs`, form)
        dispatch({
            type: 'ADD_STAFF', staff: {
                no: staffs.length > 0 ? staffs[staffs.length-1].no+1 : 0,
                ...form
            }
        })
    }

    
    return (
        <div className='form-container'>
            <h2>Add Staff</h2>
           {form.firstname} {form.lastname} {form.day} {form.tel}
            <table>
                <tbody>
                    <tr>
                        <td>FirstName</td>
                        <td>
                            <input className='inpt'
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_FIRSTNAME', firstname: e.target.value })}
                            
                                
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Lastname</td>
                        <td>
                        <input className='inpt'
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_LASTNAME', lastname: e.target.value })}
                        />  
                        </td>
                    </tr>
                    <tr>
                        <td>DAY</td>
                        <td>
                        <input className='inpt'
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_DAY', day: e.target.value })}
                        />   
                        </td>
                    </tr>
                    <tr>
                        <td>TEL</td>
                        <td>
                        <input className='inpt'
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_TEL', tel: e.target.value })}
                        />   
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button className='btn' onClick ={addStaff}>**CREATE**</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InputForm