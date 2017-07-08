import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

function fighterReducer(state = [], action){
    switch(action.type){
        case 'PLAYER1_SUCCESS':
            return [...state, action.player]
        case 'PLAYER2_SUCCESS':
            return [...state, action.player]    
        default:
            return state;    
    }
}
const rootReducer = combineReducers({fighterReducer, routing: routerReducer});

export default rootReducer;