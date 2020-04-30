import {createStore, combineReducers,applyMiddleware, compose} from 'redux'
const initialForm = {
    id: '' ,
    firstname: '',
    lastname: '',
    day: '',
    tel: ''
}
const formReducer = (state=initialForm,action)=>{
    switch(action.type){
        case 'CHANGE_ID': return {...state,id: action.id}
        case 'CHANGE_FIRSTNAME': return {...state,firstname: action.firstname}
        case 'CHANGE_LASTNAME': return {...state,lastname: action.lastname}
        case 'CHANGE_DAY': return {...state,day: action.day}
        case 'CHANGE_TEL': return {...state,tel: action.tel}
        default:return state;
    }
}

const StaffReducer=(state=[],action)=>{
    switch(action.type){
        case 'GET_STAFFS':
            return action.staff
        case 'ADD_STAFF': 
            return [...state,action.staff]
        case 'DELETE_STAFF':
             return state.filter(staff => staff.id !== +action.id)
        case 'UPDATE_STAFF': 
            return state.map(staff => {
             if(+staff.id === +action.id)
             return action.staff;
             else return staff;
            })
        default:
            return state;
    }
}

const reducer = combineReducers({
    Staff: StaffReducer,
    form: formReducer
})


const Store = createStore(reducer)
export default Store