import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import RecipelistItem from './RecipelistItem';

class FavoriteRecipe extends Component {
    render() {
        return (
        <div>
              <h4 className="link"><Link to="/">Home Page</Link></h4>
            <h4>Favorite Recipes</h4>
            
            {this.props.favoriterecipes.length > 0 ?
           this.props.favoriterecipes.map((recipe,i)=> {
               return (
                <RecipelistItem key={i} favoriteButton={false} recipe={recipe} />
               )
            
           }):(<p>Yet You donot choose Your Favorite Recipe </p>)
        }
        </div>    
        );
    }
}

function mapStateToProps(state){
    return{
        favoriterecipes:state.favoriterecipes
    }
}

export default connect(mapStateToProps,null)(FavoriteRecipe);