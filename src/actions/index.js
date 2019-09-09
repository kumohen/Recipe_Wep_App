import {SET_GAME_STARTED,SET_INSTRUCTIONS_EXPANDED,DECK,DECK_DRAW,SET_GUESS} from './types';

export function startGame(){
    return {
        type:SET_GAME_STARTED,
        gameStarted:true
    }
}

export function cancelGame(){
    return {
        type:SET_GAME_STARTED,
        gameStarted:false
    }
}
export function expandInstructions(){
    return {
        type:SET_INSTRUCTIONS_EXPANDED,
        instructionsExpanded:true
    }
}
export function collapseInstructions(){
    return {
        type:SET_INSTRUCTIONS_EXPANDED,
        instructionsExpanded:false
    }
}

export function fetchDeckResult(deckjson){
    const {remaining,deck_id} = deckjson;
    return {
        type:DECK.FETCH_SUCCESS,
        remaining,
        deck_id
    }
}
export function fetchDeckError(error){
    
    return {
        type:DECK.FETCH_ERROR,
        message:error.message
    }
}
export const fetchNewDeck = () => (dispatch)=> {
    const url = `https://cors-anywhere.herokuapp.com/https://deckofcardsapi.com/api/deck/new/shuffle/`
   return fetch(url,{method:'GET'})
      .then (response => response.json())
      .then(json => dispatch(fetchDeckResult(json)))
      .catch(error => dispatch(fetchDeckError(error)))  
}

export const fetchDrawCard = deck_id => dispatch => {
    if(deck_id){
        return fetch(`https://cors-anywhere.herokuapp.com/https://deckofcardsapi.com/api/deck/${deck_id}/draw/`)
        .then (response => response.json())
        .then(json => {
            dispatch({
                type:DECK_DRAW.FETCH_SUCCESS,
                cards:json.cards,
                remaining:json.remaining
            })
        })
        .catch(error => dispatch({type:DECK_DRAW.FETCH_ERROR,message:error.message})) 
    }
    
}

export const setGuessEven = ()=>{
    return {type:SET_GUESS,guess:'even'}
}
export const setGuessOdd = ()=>{
    return {type:SET_GUESS,guess:'odd'}
}