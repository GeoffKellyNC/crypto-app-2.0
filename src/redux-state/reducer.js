
import { combineReducers } from 'redux';
import * as types from './action-types';


function stats (state = [], action){
    switch(action.type) {
        case types.GET_STATS:
            return action.payload
        default:
            return state
    }
}

function statsLoading (state = true, action){
    switch(action.type) {
        case types.STATS_LOADING:
            return action.payload
        default:
            return state
    }
}



export default combineReducers({
    stats,
    statsLoading
})