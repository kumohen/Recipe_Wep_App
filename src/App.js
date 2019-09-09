import React, { Component } from 'react';
import {connect} from 'react-redux';
import {startGame,cancelGame,fetchNewDeck} from './actions';
import './style/index.css'
import Instruction from './Instruction';
import DrawCard from './DrawCard';
import Card from './Card';
import Guess from './Guess';
import GameState from './GameState';

class App extends Component {
  startGame = ()=>{
    this.props.startGame();
   this.props.fetchNewDeck();
  }
  // cancelGame = ()=>{
  //   this.props.dispatch(cancelGame())
  // }
  render() {
  console.log(this.state)
    return (
      <div >
        <h3 className="title">Even or Odds</h3>
       
       {this.props.gameStarted ?(
         <div>
           <h3>game is on</h3>
            <br/>
           <GameState/>
           <br/>
           <Guess/>
           <br/>
           <DrawCard/>
           <Card/>
           <hr/>
           <button onClick={this.props.cancelGame}>Cancel Game</button>
         </div>
       ) :(
        <div>
        <h3>game is await</h3>
        <br/>
        <button onClick={this.startGame }> Game Start</button>
        <hr/>
        <Instruction/>
      </div>
       )}
     
      </div>
    );
  }
}
const mapStateToProps = state =>{
  console.log(state)
  return {
    gameStarted:state.gameStarted
  }
}
// const mapDispatchToProps = dispatch =>{
//   return {
//     startGame:()=> dispatch(startGame()),
//     cancelGame:()=> dispatch(cancelGame()),
//     fetchNewDeck:()=> fetchNewDeck(dispatch)
//   }
// }
const componentConnector = connect(mapStateToProps,{startGame,cancelGame,fetchNewDeck});

export default componentConnector(App);