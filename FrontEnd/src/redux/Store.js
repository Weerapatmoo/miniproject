import {createStore, combineReducers,applyMiddleware, compose} from 'redux'
const initialForm = {
    id: '' ,
    Firstname: '',
    Lastname: '',
    Day: '',
    Tel: ''
}
const formReducer = (state=initialForm,action)=>{
    switch(action.type){
        case 'CHANGE_ID': return {...state,id: action.id}
        case 'CHANGE_FIRSTNAME': return {...state,Firstname: action.Firstname}
        case 'CHANGE_LASTNAME': return {...state,Lastname: action.Lastname}
        case 'CHANGE_DAY': return {...state,day: action.Day}
        case 'CHANGE_TEL': return {...state,tel: action.Tel}
        default:return state;
    }
}

const StaffReducer=(state=[],action)=>{
    switch(action.type){
        case 'GET_STAFFS':
            return action.Staff
        case 'ADD_STAFF': 
            return [...state,action.Staff]
        case 'DELETE_STAFF':
             return state.filter(Staff => Staff.id !== +action.id)
        case 'UPDATE_STAFF': 
            return state.map(Staff => {
             if(+Staff.id === +action.id)
             return action.Staff;
             else return Staff;
            })
        default:
            return state;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
    Staff: StaffReducer,
    form: formReducer
})


const store = createStore(reducer,composeEnhancers(applyMiddleware()))
export default store