import React from 'react';
import {connect} from 'react-redux';

const correctGuessesRecord = 'CORRECT_GUESSES_RECORD';

const checkRecord = correctGuesses =>{
    const record = Number(localStorage.getItem(correctGuessesRecord));
    if(correctGuesses > record){
        localStorage.setItem(correctGuessesRecord,correctGuesses);
        return {record:correctGuesses,isNewRecord:true}
    }
    return {record,isNewRecord:false}
}

const GameState = ({remaining,correctGuesses}) => {
    const guessText =  correctGuesses === 1 ? 'guess' :  'guesses';
    const {record,isNewRecord} = checkRecord(correctGuesses);
    const recordLable = isNewRecord ? 'New Record' : 'Record'
    return (
        <div>
            <h3>{recordLable}:{record}</h3>
            <p>{remaining} cards remaining</p>
            <p>{correctGuesses} correct {guessText}</p>
        </div>
    );
};
const mapStateToProps = state =>{
   
    return {
      remaining:state.remaining,
      correctGuesses:state.correctGuesses  
    }
  }

export default connect(mapStateToProps,null)(GameState);