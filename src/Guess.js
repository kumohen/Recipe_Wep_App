import React from 'react';
import {connect} from 'react-redux';
import {setGuessEven,setGuessOdd} from './actions';

const Guess = ({setGuessEven,setGuessOdd,guess}) => {
    return (
        <div>
            <h3>will it be even or odd</h3>
            <div>
                <button onClick={setGuessEven}
                    style={guess === 'even' ?{border:'2px solid #43a047'}:null}
                >Even</button>
                {'  '}
                <button 
                 style={guess === 'odd' ?{border:'2px solid #43a047'}:null}
                onClick={setGuessOdd}>Odd</button>
            </div>
        </div>
    );
};
const mapStateToProps = state =>{
    console.log(state)
    return {
      guess:state.guess
    }
  }

export default connect(mapStateToProps,{setGuessEven,setGuessOdd})(Guess);