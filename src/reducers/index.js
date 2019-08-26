import {SET_RECIPES,FAVOURITE_RECIPE} from '../actions';
import {combineReducers} from 'redux';

 function recipes(state=[],action){
    switch(action.type){
        case SET_RECIPES:
            return action.items;   
        default:
           return state;    
    }
}
function favoriterecipes(state=[],action){
    switch(action.type){
        case FAVOURITE_RECIPE:
            state=[...state,action.recipe]
            return state   
        default:
           return state;    
    }
}

const rootReducer =  combineReducers({
    recipes,
    favoriterecipes
})

export default rootReducer;