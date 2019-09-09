import {SET_GAME_STARTED,SET_INSTRUCTIONS_EXPANDED,DECK,DECK_DRAW,SET_GUESS} from '../actions/types';
//import {combineReducers} from 'redux';

const DEFAULT_SETTINGS = {
    gameStarted:false,
    instructionsExpanded:false,
    deck_id:'',
    remaining:0,
    cards:[],
    guess:'',
    correctGuesses:0
}
const EVENS = ['2','4','6','8','0']
const ODDS = ['ACE','3','5','7','9']

 function rootReducer(state=DEFAULT_SETTINGS,action){
     let remaining,cards,deck_id ;
    switch(action.type){
        case SET_GAME_STARTED:
            return {...state,gameStarted:action.gameStarted};
        case SET_INSTRUCTIONS_EXPANDED:
            return {...state,instructionsExpanded:action.instructionsExpanded}    
        case DECK.FETCH_SUCCESS:
             ({remaining,deck_id} = action)
            return {...state,remaining,deck_id}    
        case DECK.FETCH_ERROR:
            return {...state,message:action.message}  
        case    DECK_DRAW.FETCH_SUCCESS:
             ( {remaining,cards} = action);
             const {value} = action.cards[0];
             const {guess,correctGuesses} = state ;
             if(
                (guess === 'even' && EVENS.includes(value)) || (guess === 'odd' && ODDS.includes(value))
             ){
                return {...state,correctGuesses:correctGuesses+1} 
             }
             return {...state,remaining,cards,correctGuesses} 
        case DECK.DRAW_FETCH_ERROR:
             return {...state,message:action.message}    
        case SET_GUESS:
             return {...state,guess:action.guess}             
        default:
           return state;    
    }
}



export default rootReducer;