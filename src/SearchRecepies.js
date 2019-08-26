import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getRecipes} from './actions';

class SearchRecepies extends Component {
    state ={
      ingredients:"",
      dish:""  
    }
    search(){
        const url = `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${this.state.ingredients}&q=${this.state.dish}`;
      fetch(url,{method:'GET'})
        .then(response => response.json())
        .then(json => {
            this.props.getRecipes(json.results)
        })
    }
    render() {
        return (
            <div className="form">
                <Form inline>
                    <Form.Group >
                        <Form.Label>Ingredent</Form.Label>
                        {' '}
                        <Form.Control type="text" 
                        onChange={event => this.setState({ingredients:event.target.value})}
                        placeholder="@example: garlic" />
                      
                    </Form.Group>
                       
                    <Form.Group >
                     
                        <Form.Label>Dish</Form.Label>
                        {' '}
                        <Form.Control type="text"
                          onChange={event => this.setState({dish:event.target.value})}
                            placeholder="@example:pizza" />
                    </Form.Group>
                 
                    <Button   onClick={()=> this.search()}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default connect(null,{getRecipes}) (SearchRecepies);