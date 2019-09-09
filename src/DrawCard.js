import React from 'react';
import {connect} from 'react-redux';
import {fetchDrawCard} from './actions';

const DrawCard = ({deck_id,fetchDrawCard}) => {

    return (
        <div>
            <button onClick={fetchDrawCard(deck_id)}>Draw The next card</button>
        </div>
    );
};

const mapStateToProps = state =>{
    console.log(state)
    return {
      deck_id:state.deck_id
    }
  }
  const mapDispatchToProps = dispatch =>{
      return {
        fetchDrawCard:deck_id => ()=> dispatch(fetchDrawCard(deck_id))
  
      }
    }
export default connect(mapStateToProps,mapDispatchToProps)(DrawCard);