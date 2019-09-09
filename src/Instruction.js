import React from 'react';
import {connect} from 'react-redux';
import {expandInstructions,collapseInstructions} from './actions';

const Instruction = ({instructionsExpanded,expandInstructions,collapseInstructions}) => {
    if(instructionsExpanded){
        return (
            <div>
                <h3>Instruction</h3>
                <p>Weilcome To even and odd Card Game</p>
                <p>Face card don't count</p>
                <p>Weilcome To even and odd Card Game</p>
            <p>Weilcome To even and odd Card Game</p>
                <br/>
                <button onClick={collapseInstructions}>
                    Show Less
                </button>
            </div>
        );
    }
    return (
        <div>
            <h3>Instruction</h3>
            <p>Weilcome To even and odd Card Game</p>
            
            <button onClick={expandInstructions}>Read More</button>
        </div>
    )
};

const mapStateToProps = state =>{
    console.log(state)
    return {
        instructionsExpanded:state.instructionsExpanded
    }
  }
  const mapDispatchToProps = dispatch =>{
    return {
        expandInstructions:()=> dispatch(expandInstructions()),
        collapseInstructions:()=> dispatch(collapseInstructions())
    }
  }  

export default connect(mapStateToProps,mapDispatchToProps) (Instruction);