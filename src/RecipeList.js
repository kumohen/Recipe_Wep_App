import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import RecipelistItem from './RecipelistItem';

class RecipeList extends Component {
    
    render() {
        const {recipes} = this.props;
        return (
            <div>
                <h4 className="link"><Link to="/favorites">Favorite Recipe</Link></h4>
                {recipes ?  recipes.map((recipe,i)=>{
                    return (
                        <RecipelistItem key={i} favoriteButton={true} recipe={recipe} />
                    )
                }):null}
            </div>
        );
    }
}
function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps,null) (RecipeList);
