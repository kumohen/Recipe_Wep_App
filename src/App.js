import React, { Component } from 'react';
import SearchRecepies from './SearchRecepies';
import RecipeList from './RecipeList';

import './style/index.css'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div >
        <h3 className="title">Recipe App</h3>
       
        <SearchRecepies/>
    
        <RecipeList/>
     
      </div>
    );
  }
}

export default App;