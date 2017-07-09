import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const defaultState = {num:0}

function fighterReducer(state = defaultState, action){
    switch(action.type){
        case 'ADD_PLAYER':
            return {...state, num: state.num + 1}  
        case 'REMOVE_PLAYER':
            return {...state, num: state.num - 1 }
        default:
            return state;    
    }
}
const rootReducer = combineReducers({fighterReducer, routing: routerReducer});

export default rootReducer;