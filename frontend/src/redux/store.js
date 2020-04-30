import {createStore, combineReducers} from 'redux'
const initialForm = {
    no: '' ,
    firstname: '',
    lastname: '',
    day: '',
    tel: ''
}
const formReducer = (state=initialForm,action)=>{
    switch(action.type){
        case 'CHANGE_NO': return {...state,no: action.no}
        case 'CHANGE_FIRSTNAME': return {...state,firstname: action.firstname}
        case 'CHANGE_LASTNAME': return {...state,lastname: action.lastname}
        case 'CHANGE_DAY': return {...state,day: action.day}
        case 'CHANGE_TEL': return {...state,tel: action.tel}
        default:return state;
    }
}

const staffReducer=(state=[],action)=>{
    switch(action.type){
        case 'GET_STAFFS':
            return action.staff
        case 'ADD_STAFF': 
            return [...state,action.staff]
        case 'DELETE_STAFF':
             return state.filter(staff => staff.no !== +action.no)
        case 'UPDATE_STAFF': 
            return state.map(staff => {
             if(+staff.no === +action.no)
             return action.staff;
             else return staff;
            })
        default:
            return state;
    }
}
const reducer = combineReducers({
    staff: staffReducer,
    form: formReducer
})

export const store = createStore(reducer)