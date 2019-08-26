import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch,Route } from "react-router-dom";

import App from './App';
import FavoriteRecipe from './FavoriteRecipe';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
store.subscribe(()=> console.log('state',store.getState()));

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/favorites" component={FavoriteRecipe}/>
    </Switch>    
</BrowserRouter>
</Provider>
, document.getElementById('root'));

